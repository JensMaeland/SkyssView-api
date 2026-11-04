const ENTUR_URL = "https://api.entur.io/journey-planner/v3/graphql";

// Entur requires all consumers to identify themselves with this header.
// Format: "company-application". Change this to something identifying your project.
const CLIENT_NAME = "jensmaeland-eink-departure-board";

const QUERY = `
  query StopPlaceDepartures($id: String!, $numberOfDepartures: Int!) {
    stopPlace(id: $id) {
      id
      name
      estimatedCalls(
        numberOfDepartures: $numberOfDepartures
        timeRange: 72100
        includeCancelledTrips: false
        whiteListedModes: [bus, tram, water, rail, coach]
      ) {
        realtime
        expectedDepartureTime
        aimedDepartureTime
        cancellation
        destinationDisplay {
          frontText
        }
        serviceJourney {
          line {
            publicCode
            transportMode
          }
        }
      }
    }
  }
`;

/**
 * Fetch upcoming departures for a given Entur stop place.
 * @param {string} stopId - e.g. "NSR:StopPlace:xxxxx"
 * @param {number} count - how many departures to fetch
 */
export async function fetchDepartures(stopId, count = 8) {
  const res = await fetch(ENTUR_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "ET-Client-Name": CLIENT_NAME,
    },
    body: JSON.stringify({
      query: QUERY,
      variables: { id: stopId, numberOfDepartures: count },
    }),
  });

  if (!res.ok) {
    throw new Error(`Entur API error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }

  const stopPlace = json.data?.stopPlace;
  if (!stopPlace) {
    throw new Error(`No stop place found for id "${stopId}"`);
  }

  const departures = stopPlace.estimatedCalls
    .filter((c) => !c.cancellation)
    .map((call) => {
      return {
        line: call.serviceJourney?.line?.publicCode ?? "?",
        mode: call.serviceJourney?.line?.transportMode ?? "bus",
        destination: call.destinationDisplay?.frontText ?? "",
        departureTime: new Date(call.expectedDepartureTime),
        realtime: call.realtime,
      };
    });

  return {
    stopName: stopPlace.name,
    departures,
  };
}
