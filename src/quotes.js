// One quote per day of the year, shown at the top of the board.
// Index 0 = Jan 1, index 364 = Dec 31 (day 366 in leap years just reuses
// index 364 — see getQuoteOfTheDay below).
//
// Replace each placeholder below with your own quote text.
export const QUOTES = [
  {
    "id": 1,
    "text": "Jeg er ikke lat, jeg sparer energi til senere som aldri kommer.",
    "category": "funny"
  },
  {
    "id": 2,
    "text": "Skygger er bare venner som ikke tør å si hei.",
    "category": "nonsense"
  },
  {
    "id": 3,
    "text": "Selv den minste håpet kaster lys i mørket.",
    "category": "inspiring"
  },
  {
    "id": 4,
    "text": "Skoene dine vet veien bedre enn du gjør.",
    "category": "nonsense"
  },
  {
    "id": 5,
    "text": "Ingen bølgen er for liten til å forandre en tyngden.",
    "category": "inspiring"
  },
  {
    "id": 6,
    "text": "Nysgjerrigheten begynner alltid som en hvisken, aldri som et rop.",
    "category": "inspiring"
  },
  {
    "id": 7,
    "text": "Reisen er alltid nærmere enn du tror.",
    "category": "inspiring"
  },
  {
    "id": 8,
    "text": "Din tålmodigheten har allerede begynt, du bare ikke sett den ennå.",
    "category": "inspiring"
  },
  {
    "id": 9,
    "text": "Dagens plan: overleve, kanskje imponere noen.",
    "category": "funny"
  },
  {
    "id": 10,
    "text": "Sokker forsvinner fordi de drømmer om friheten.",
    "category": "nonsense"
  },
  {
    "id": 11,
    "text": "Jeg sier 'bare fem minutter til' til både seng og skjerm.",
    "category": "funny"
  },
  {
    "id": 12,
    "text": "Det du kaller stillheten, kan være begynnelsen på tvilen.",
    "category": "inspiring"
  },
  {
    "id": 13,
    "text": "Du trenger ikke se hele veksten for å ta det første steget.",
    "category": "inspiring"
  },
  {
    "id": 14,
    "text": "Det er ingen skam i å hvile før tilliten.",
    "category": "inspiring"
  },
  {
    "id": 15,
    "text": "Alarmen min og jeg har et komplisert forhold.",
    "category": "funny"
  },
  {
    "id": 16,
    "text": "Selv horisonten finner alltid vei til forandringen.",
    "category": "inspiring"
  },
  {
    "id": 17,
    "text": "La tvilen minne deg på hvor langt stillheten kan bære deg.",
    "category": "inspiring"
  },
  {
    "id": 18,
    "text": "Selv ilden finner alltid vei til stormen.",
    "category": "inspiring"
  },
  {
    "id": 19,
    "text": "Det du kaller øyeblikket, kan være begynnelsen på tomheten.",
    "category": "inspiring"
  },
  {
    "id": 20,
    "text": "Stemmen bygges av øyeblikk, ikke av hastverk.",
    "category": "inspiring"
  },
  {
    "id": 21,
    "text": "Fjellet venter ikke på perfekt vær.",
    "category": "inspiring"
  },
  {
    "id": 22,
    "text": "Din jorden trenger ingen andres godkjenning for å telle.",
    "category": "inspiring"
  },
  {
    "id": 23,
    "text": "Selv den minste gleden kaster lys i mørket.",
    "category": "inspiring"
  },
  {
    "id": 24,
    "text": "Der øyeblikket møter vinteren, begynner noe nytt.",
    "category": "inspiring"
  },
  {
    "id": 25,
    "text": "La vinteren minne deg på hvor langt stillheten kan bære deg.",
    "category": "inspiring"
  },
  {
    "id": 26,
    "text": "Hvert skritt mot stillheten er et skritt bort fra tvilen.",
    "category": "inspiring"
  },
  {
    "id": 27,
    "text": "Det du kaller gnisten, kan være begynnelsen på ensomheten.",
    "category": "inspiring"
  },
  {
    "id": 28,
    "text": "Stol på skogen, selv når forandringen er stille.",
    "category": "inspiring"
  },
  {
    "id": 29,
    "text": "Forvandlingen er ikke fraværet av frykt, men modet til å fortsette likevel.",
    "category": "inspiring"
  },
  {
    "id": 30,
    "text": "Jeg har et PhD i å google symptomer og bekymre meg unødvendig.",
    "category": "funny"
  },
  {
    "id": 31,
    "text": "Fjellet flytter seg en millimeter hvert år, bare for å se om noen merker det.",
    "category": "nonsense"
  },
  {
    "id": 32,
    "text": "Hvert skritt mot øyeblikket er et skritt bort fra tvilen.",
    "category": "inspiring"
  },
  {
    "id": 33,
    "text": "Gnisten er alltid nærmere enn du tror.",
    "category": "inspiring"
  },
  {
    "id": 34,
    "text": "Elefanter husker alt, unntatt hvorfor de begynte å huske.",
    "category": "nonsense"
  },
  {
    "id": 35,
    "text": "Jeg er ekspert på å lage lister jeg aldri fullfører.",
    "category": "funny"
  },
  {
    "id": 36,
    "text": "Tåka er himmelen som prøver å gjemme seg.",
    "category": "nonsense"
  },
  {
    "id": 37,
    "text": "Havet forteller de samme vitsene om og om igjen.",
    "category": "nonsense"
  },
  {
    "id": 38,
    "text": "Horisonten begynner alltid som en hvisken, aldri som et rop.",
    "category": "inspiring"
  },
  {
    "id": 39,
    "text": "Det er ingen skam i å hvile før ilden.",
    "category": "inspiring"
  },
  {
    "id": 40,
    "text": "Stemmen vokser saktest, men holder lengst.",
    "category": "inspiring"
  },
  {
    "id": 41,
    "text": "Det du kaller hjertet, kan være begynnelsen på stillstanden.",
    "category": "inspiring"
  },
  {
    "id": 42,
    "text": "Reisen er ikke fraværet av frykt, men modet til å fortsette likevel.",
    "category": "inspiring"
  },
  {
    "id": 43,
    "text": "Stjernene i dag er roten til det ukjente i morgen.",
    "category": "inspiring"
  },
  {
    "id": 44,
    "text": "Du bærer frøet i deg, selv når du glemmer det.",
    "category": "inspiring"
  },
  {
    "id": 45,
    "text": "Stol på hjertet, selv når motstanden er stille.",
    "category": "inspiring"
  },
  {
    "id": 46,
    "text": "Du bærer regnet i deg, selv når du glemmer det.",
    "category": "inspiring"
  },
  {
    "id": 47,
    "text": "Øyeblikket vokser saktest, men holder lengst.",
    "category": "inspiring"
  },
  {
    "id": 48,
    "text": "Et ekko er bare et rop som leter etter noen å bli hos.",
    "category": "nonsense"
  },
  {
    "id": 49,
    "text": "Fisk nyser under vann, ingen har bevist det motsatte.",
    "category": "nonsense"
  },
  {
    "id": 50,
    "text": "Modet er alltid nærmere enn du tror.",
    "category": "inspiring"
  },
  {
    "id": 51,
    "text": "La utmattelsen minne deg på hvor langt modet kan bære deg.",
    "category": "inspiring"
  },
  {
    "id": 52,
    "text": "Ingen jorden er for liten til å forandre en tvilen.",
    "category": "inspiring"
  },
  {
    "id": 53,
    "text": "Stillheten begynner alltid som en hvisken, aldri som et rop.",
    "category": "inspiring"
  },
  {
    "id": 54,
    "text": "Det som føles som jorden i dag, kan bli tvilen i morgen.",
    "category": "inspiring"
  },
  {
    "id": 55,
    "text": "Bak hver frøet skjuler det seg en utmattelsen som venter på deg.",
    "category": "inspiring"
  },
  {
    "id": 56,
    "text": "Du trenger ikke se hele morgenen for å ta det første steget.",
    "category": "inspiring"
  },
  {
    "id": 57,
    "text": "Vinden hvisker oppskrifter ingen har bedt om.",
    "category": "nonsense"
  },
  {
    "id": 58,
    "text": "Regnet vokser saktest, men holder lengst.",
    "category": "inspiring"
  },
  {
    "id": 59,
    "text": "Jeg spiser frokost til middag fordi jeg lager egne regler.",
    "category": "funny"
  },
  {
    "id": 60,
    "text": "Hver modet har rom for en ny begynnelse.",
    "category": "inspiring"
  },
  {
    "id": 61,
    "text": "I stillheten mellom nysgjerrigheten og motstanden bor svaret ditt.",
    "category": "inspiring"
  },
  {
    "id": 62,
    "text": "Der reisen møter kaoset, begynner noe nytt.",
    "category": "inspiring"
  },
  {
    "id": 63,
    "text": "Jeg er så god til å prokrastinere at det nesten er en jobb.",
    "category": "funny"
  },
  {
    "id": 64,
    "text": "Selv den minste modet kaster lys i mørket.",
    "category": "inspiring"
  },
  {
    "id": 65,
    "text": "Mandager burde vært valgfrie.",
    "category": "funny"
  },
  {
    "id": 66,
    "text": "Selv hjertet finner alltid vei til avstanden.",
    "category": "inspiring"
  },
  {
    "id": 67,
    "text": "Det er ingen skam i å hvile før forvandlingen.",
    "category": "inspiring"
  },
  {
    "id": 68,
    "text": "Stjerner blunker fordi de synes universet er morsomt.",
    "category": "nonsense"
  },
  {
    "id": 69,
    "text": "Du er ikke bak; du er akkurat der vissheten trenger deg å være.",
    "category": "inspiring"
  },
  {
    "id": 70,
    "text": "La avstanden minne deg på hvor langt elven kan bære deg.",
    "category": "inspiring"
  },
  {
    "id": 71,
    "text": "Modet begynner alltid som en hvisken, aldri som et rop.",
    "category": "inspiring"
  },
  {
    "id": 72,
    "text": "Selv veksten finner alltid vei til usikkerheten.",
    "category": "inspiring"
  },
  {
    "id": 73,
    "text": "En dør vet alltid mer enn den forteller.",
    "category": "nonsense"
  },
  {
    "id": 74,
    "text": "Stol på håpet, selv når utmattelsen er stille.",
    "category": "inspiring"
  },
  {
    "id": 75,
    "text": "Alarmen min og jeg har et komplisert forhold.",
    "category": "funny"
  },
  {
    "id": 76,
    "text": "Det du kaller hjertet, kan være begynnelsen på stormen.",
    "category": "inspiring"
  },
  {
    "id": 77,
    "text": "Noen ganger er horisonten nok til å snu en hel dag.",
    "category": "inspiring"
  },
  {
    "id": 78,
    "text": "Marsvin nynner når ingen ser på.",
    "category": "nonsense"
  },
  {
    "id": 79,
    "text": "Bak hver jorden skjuler det seg en vinteren som venter på deg.",
    "category": "inspiring"
  },
  {
    "id": 80,
    "text": "Elven i dag er roten til kaoset i morgen.",
    "category": "inspiring"
  },
  {
    "id": 81,
    "text": "Du trenger ikke se hele regnet for å ta det første steget.",
    "category": "inspiring"
  },
  {
    "id": 82,
    "text": "Vissheten begynner alltid som en hvisken, aldri som et rop.",
    "category": "inspiring"
  },
  {
    "id": 83,
    "text": "Ingen regnet er for liten til å forandre en stormen.",
    "category": "inspiring"
  },
  {
    "id": 84,
    "text": "Jorden vokser saktest, men holder lengst.",
    "category": "inspiring"
  },
  {
    "id": 85,
    "text": "Klovnenesko passer alle som tør å le av seg selv.",
    "category": "nonsense"
  },
  {
    "id": 86,
    "text": "Jeg er så god til å prokrastinere at det nesten er en jobb.",
    "category": "funny"
  },
  {
    "id": 87,
    "text": "La varmen være din tomheten i dag.",
    "category": "inspiring"
  },
  {
    "id": 88,
    "text": "Paraplyer tror de er fugler, bare i hemmelighet.",
    "category": "nonsense"
  },
  {
    "id": 89,
    "text": "Ingen veien er for liten til å forandre en stormen.",
    "category": "inspiring"
  },
  {
    "id": 90,
    "text": "Voksenlivet er bare å spørre 'hvor la jeg nøklene' på repeat.",
    "category": "funny"
  },
  {
    "id": 91,
    "text": "Et sted der ute dømmer en katt deg akkurat nå.",
    "category": "nonsense"
  },
  {
    "id": 92,
    "text": "Du er ikke bak; du er akkurat der dagen trenger deg å være.",
    "category": "inspiring"
  },
  {
    "id": 93,
    "text": "Blyanter husker alt de aldri fikk skrive ned.",
    "category": "nonsense"
  },
  {
    "id": 94,
    "text": "Modet vokser saktest, men holder lengst.",
    "category": "inspiring"
  },
  {
    "id": 95,
    "text": "Det du kaller nysgjerrigheten, kan være begynnelsen på vinteren.",
    "category": "inspiring"
  },
  {
    "id": 96,
    "text": "Stol på pusten, selv når det ukjente er stille.",
    "category": "inspiring"
  },
  {
    "id": 97,
    "text": "Hvert skritt mot roen er et skritt bort fra tvilen.",
    "category": "inspiring"
  },
  {
    "id": 98,
    "text": "I stillheten mellom frøet og stillstanden bor svaret ditt.",
    "category": "inspiring"
  },
  {
    "id": 99,
    "text": "Veksten i dag er roten til usikkerheten i morgen.",
    "category": "inspiring"
  },
  {
    "id": 100,
    "text": "Selv den minste morgenen kaster lys i mørket.",
    "category": "inspiring"
  },
  {
    "id": 101,
    "text": "Det du kaller roten, kan være begynnelsen på tomheten.",
    "category": "inspiring"
  },
  {
    "id": 102,
    "text": "Du trenger ikke se hele reisen for å ta det første steget.",
    "category": "inspiring"
  },
  {
    "id": 103,
    "text": "Selv den minste hjertet kaster lys i mørket.",
    "category": "inspiring"
  },
  {
    "id": 104,
    "text": "Sokker forsvinner fordi de drømmer om friheten.",
    "category": "nonsense"
  },
  {
    "id": 105,
    "text": "Din styrken trenger ingen andres godkjenning for å telle.",
    "category": "inspiring"
  },
  {
    "id": 106,
    "text": "Det er ingen skam i å hvile før regnet.",
    "category": "inspiring"
  },
  {
    "id": 107,
    "text": "Stol på roten, selv når kaoset er stille.",
    "category": "inspiring"
  },
  {
    "id": 108,
    "text": "La utmattelsen minne deg på hvor langt havet kan bære deg.",
    "category": "inspiring"
  },
  {
    "id": 109,
    "text": "En sky kan ikke lyve, den bare skifter mening ofte.",
    "category": "nonsense"
  },
  {
    "id": 110,
    "text": "Selv stjernene finner alltid vei til frykten.",
    "category": "inspiring"
  },
  {
    "id": 111,
    "text": "Det du kaller elven, kan være begynnelsen på natten.",
    "category": "inspiring"
  },
  {
    "id": 112,
    "text": "Veksten husker alt vinteren har gitt slipp på.",
    "category": "inspiring"
  },
  {
    "id": 113,
    "text": "Tåka er himmelen som prøver å gjemme seg.",
    "category": "nonsense"
  },
  {
    "id": 114,
    "text": "Din roen har allerede begynt, du bare ikke sett den ennå.",
    "category": "inspiring"
  },
  {
    "id": 115,
    "text": "Du trenger ikke se hele øyeblikket for å ta det første steget.",
    "category": "inspiring"
  },
  {
    "id": 116,
    "text": "Kaffe først. Å være voksen etterpå.",
    "category": "funny"
  },
  {
    "id": 117,
    "text": "Jeg spiser frokost til middag fordi jeg lager egne regler.",
    "category": "funny"
  },
  {
    "id": 118,
    "text": "En sky kan ikke lyve, den bare skifter mening ofte.",
    "category": "nonsense"
  },
  {
    "id": 119,
    "text": "Jeg er verdensmester i utsettelse.",
    "category": "funny"
  },
  {
    "id": 120,
    "text": "Humør: 60% kaffe, 40% håp.",
    "category": "funny"
  },
  {
    "id": 121,
    "text": "Gleden vokser der du minst venter det.",
    "category": "inspiring"
  },
  {
    "id": 122,
    "text": "Dagen bygges av øyeblikk, ikke av hastverk.",
    "category": "inspiring"
  },
  {
    "id": 123,
    "text": "Jeg har googlet 'hvordan være voksen' flere ganger enn jeg vil innrømme.",
    "category": "funny"
  },
  {
    "id": 124,
    "text": "En stein flyter aldri, men den drømmer stort.",
    "category": "nonsense"
  },
  {
    "id": 125,
    "text": "Stemmen i dag er roten til kaoset i morgen.",
    "category": "inspiring"
  },
  {
    "id": 126,
    "text": "I stillheten mellom tålmodigheten og gjentakelsen bor svaret ditt.",
    "category": "inspiring"
  },
  {
    "id": 127,
    "text": "Du trenger ikke se hele jorden for å ta det første steget.",
    "category": "inspiring"
  },
  {
    "id": 128,
    "text": "Humør: 60% kaffe, 40% håp.",
    "category": "funny"
  },
  {
    "id": 129,
    "text": "Stol på pusten, selv når mørket er stille.",
    "category": "inspiring"
  },
  {
    "id": 130,
    "text": "Dagens plan: overleve, kanskje imponere noen.",
    "category": "funny"
  },
  {
    "id": 131,
    "text": "Klovnenesko passer alle som tør å le av seg selv.",
    "category": "nonsense"
  },
  {
    "id": 132,
    "text": "La regnet være din forandringen i dag.",
    "category": "inspiring"
  },
  {
    "id": 133,
    "text": "Tålmodigheten vokser saktest, men holder lengst.",
    "category": "inspiring"
  },
  {
    "id": 134,
    "text": "Måneskinn er bare solen som er blitt sjenert.",
    "category": "nonsense"
  },
  {
    "id": 135,
    "text": "Du trenger ikke se hele vissheten for å ta det første steget.",
    "category": "inspiring"
  },
  {
    "id": 136,
    "text": "Tilliten venter ikke på perfekt vær.",
    "category": "inspiring"
  },
  {
    "id": 137,
    "text": "Ingen jorden er for liten til å forandre en stillstanden.",
    "category": "inspiring"
  },
  {
    "id": 138,
    "text": "Hver veien har rom for en ny begynnelse.",
    "category": "inspiring"
  },
  {
    "id": 139,
    "text": "Din reisen trenger ingen andres godkjenning for å telle.",
    "category": "inspiring"
  },
  {
    "id": 140,
    "text": "Et ekko er bare et rop som leter etter noen å bli hos.",
    "category": "nonsense"
  },
  {
    "id": 141,
    "text": "Du er ikke bak; du er akkurat der tålmodigheten trenger deg å være.",
    "category": "inspiring"
  },
  {
    "id": 142,
    "text": "Ingen vet hvor lynet tar sokkene sine fra.",
    "category": "nonsense"
  },
  {
    "id": 143,
    "text": "Regnbuer er himmelens måte å vise seg frem på.",
    "category": "nonsense"
  },
  {
    "id": 144,
    "text": "Du trenger ikke se hele tålmodigheten for å ta det første steget.",
    "category": "inspiring"
  },
  {
    "id": 145,
    "text": "Grantrær teller årene sine i hemmelighet.",
    "category": "nonsense"
  },
  {
    "id": 146,
    "text": "Modet venter ikke på perfekt vær.",
    "category": "inspiring"
  },
  {
    "id": 147,
    "text": "Klokker går rundt fordi de har glemt hvor de skal.",
    "category": "nonsense"
  },
  {
    "id": 148,
    "text": "La gjentakelsen minne deg på hvor langt stillheten kan bære deg.",
    "category": "inspiring"
  },
  {
    "id": 149,
    "text": "Gå mot drømmen, selv om natten står i veien.",
    "category": "inspiring"
  },
  {
    "id": 150,
    "text": "Snøfnugg planlegger reisen sin i flere måneder.",
    "category": "nonsense"
  },
  {
    "id": 151,
    "text": "Stol på stillheten, selv når vinteren er stille.",
    "category": "inspiring"
  },
  {
    "id": 152,
    "text": "La ensomheten minne deg på hvor langt tilliten kan bære deg.",
    "category": "inspiring"
  },
  {
    "id": 153,
    "text": "Hver veksten har rom for en ny begynnelse.",
    "category": "inspiring"
  },
  {
    "id": 154,
    "text": "Lyset i dag er roten til usikkerheten i morgen.",
    "category": "inspiring"
  },
  {
    "id": 155,
    "text": "Roen vokser der du minst venter det.",
    "category": "inspiring"
  },
  {
    "id": 156,
    "text": "Min indre stemme har sluttet å ta meg på alvor.",
    "category": "funny"
  },
  {
    "id": 157,
    "text": "Det som føles som horisonten i dag, kan bli gjentakelsen i morgen.",
    "category": "inspiring"
  },
  {
    "id": 158,
    "text": "Jeg trener tålmodighet ved å vente på at kaffen kjøler seg ned.",
    "category": "funny"
  },
  {
    "id": 159,
    "text": "La forvandlingen være din frykten i dag.",
    "category": "inspiring"
  },
  {
    "id": 160,
    "text": "Reisen i dag er roten til utmattelsen i morgen.",
    "category": "inspiring"
  },
  {
    "id": 161,
    "text": "Selv stemmen finner alltid vei til motstanden.",
    "category": "inspiring"
  },
  {
    "id": 162,
    "text": "Bak hver viljen skjuler det seg en natten som venter på deg.",
    "category": "inspiring"
  },
  {
    "id": 163,
    "text": "Noen ganger er vinden nok til å snu en hel dag.",
    "category": "inspiring"
  },
  {
    "id": 164,
    "text": "Gratulerer med dagen Jens!",
    "category": "birthday"
  },
  {
    "id": 165,
    "text": "Jeg trener bare tommelen, men jeg gjør det ordentlig.",
    "category": "funny"
  },
  {
    "id": 166,
    "text": "Mandager burde vært valgfrie.",
    "category": "funny"
  },
  {
    "id": 167,
    "text": "Veien er ikke fraværet av frykt, men modet til å fortsette likevel.",
    "category": "inspiring"
  },
  {
    "id": 168,
    "text": "Grantrær teller årene sine i hemmelighet.",
    "category": "nonsense"
  },
  {
    "id": 169,
    "text": "Pusten i dag er roten til tomheten i morgen.",
    "category": "inspiring"
  },
  {
    "id": 170,
    "text": "Fjellet vokser saktest, men holder lengst.",
    "category": "inspiring"
  },
  {
    "id": 171,
    "text": "Du er ikke bak; du er akkurat der håpet trenger deg å være.",
    "category": "inspiring"
  },
  {
    "id": 172,
    "text": "Skoene dine vet veien bedre enn du gjør.",
    "category": "nonsense"
  },
  {
    "id": 173,
    "text": "Dagen venter ikke på perfekt vær.",
    "category": "inspiring"
  },
  {
    "id": 174,
    "text": "Du bærer stillheten i deg, selv når du glemmer det.",
    "category": "inspiring"
  },
  {
    "id": 175,
    "text": "I stillheten mellom viljen og utmattelsen bor svaret ditt.",
    "category": "inspiring"
  },
  {
    "id": 176,
    "text": "La tvilen minne deg på hvor langt jorden kan bære deg.",
    "category": "inspiring"
  },
  {
    "id": 177,
    "text": "Fjellet begynner alltid som en hvisken, aldri som et rop.",
    "category": "inspiring"
  },
  {
    "id": 178,
    "text": "En potet drømmer aldri om å bli pommes frites.",
    "category": "nonsense"
  },
  {
    "id": 179,
    "text": "Du trenger ikke se hele veien for å ta det første steget.",
    "category": "inspiring"
  },
  {
    "id": 180,
    "text": "Bak hver skogen skjuler det seg en stillheten som venter på deg.",
    "category": "inspiring"
  },
  {
    "id": 181,
    "text": "Stillheten husker alt motstanden har gitt slipp på.",
    "category": "inspiring"
  },
  {
    "id": 182,
    "text": "Speil lyver aldri, men de sladrer heller aldri.",
    "category": "nonsense"
  },
  {
    "id": 183,
    "text": "Der gleden møter utmattelsen, begynner noe nytt.",
    "category": "inspiring"
  },
  {
    "id": 184,
    "text": "La regnet være din tyngden i dag.",
    "category": "inspiring"
  },
  {
    "id": 185,
    "text": "Det du kaller stillheten, kan være begynnelsen på tomheten.",
    "category": "inspiring"
  },
  {
    "id": 186,
    "text": "Det er ingen skam i å hvile før morgenen.",
    "category": "inspiring"
  },
  {
    "id": 187,
    "text": "Alle fugler kan i teorien lese kart, de bare later som.",
    "category": "nonsense"
  },
  {
    "id": 188,
    "text": "Gå mot stemmen, selv om utmattelsen står i veien.",
    "category": "inspiring"
  },
  {
    "id": 189,
    "text": "La tvilen minne deg på hvor langt kilden kan bære deg.",
    "category": "inspiring"
  },
  {
    "id": 190,
    "text": "Drømmen venter ikke på perfekt vær.",
    "category": "inspiring"
  },
  {
    "id": 191,
    "text": "Dagen er ikke fraværet av frykt, men modet til å fortsette likevel.",
    "category": "inspiring"
  },
  {
    "id": 192,
    "text": "En sky har aldri hastverk, og det er nettopp poenget.",
    "category": "nonsense"
  },
  {
    "id": 193,
    "text": "Ingen har sett en snegl løpe, men alle vet den kan.",
    "category": "nonsense"
  },
  {
    "id": 194,
    "text": "Bier stemmer demokratisk om hvor blomstene skal være.",
    "category": "nonsense"
  },
  {
    "id": 195,
    "text": "La skogen være din forandringen i dag.",
    "category": "inspiring"
  },
  {
    "id": 196,
    "text": "Vinden i dag er roten til det ukjente i morgen.",
    "category": "inspiring"
  },
  {
    "id": 197,
    "text": "Modet husker alt stormen har gitt slipp på.",
    "category": "inspiring"
  },
  {
    "id": 198,
    "text": "Selv lyset finner alltid vei til tyngden.",
    "category": "inspiring"
  },
  {
    "id": 199,
    "text": "En blomst vet ikke at den er vakker, det er derfor den er det.",
    "category": "nonsense"
  },
  {
    "id": 200,
    "text": "En flokk bison beveger seg aldri raskere enn den tregeste bisonen.",
    "category": "nonsense"
  },
  {
    "id": 201,
    "text": "Noen ganger er stemmen nok til å snu en hel dag.",
    "category": "inspiring"
  },
  {
    "id": 202,
    "text": "En potet drømmer aldri om å bli pommes frites.",
    "category": "nonsense"
  },
  {
    "id": 203,
    "text": "Du er ikke bak; du er akkurat der regnet trenger deg å være.",
    "category": "inspiring"
  },
  {
    "id": 204,
    "text": "Ingen kilden er for liten til å forandre en vinteren.",
    "category": "inspiring"
  },
  {
    "id": 205,
    "text": "Et fotavtrykk husker mer enn foten som satte det.",
    "category": "nonsense"
  },
  {
    "id": 206,
    "text": "Roen i dag er roten til frykten i morgen.",
    "category": "inspiring"
  },
  {
    "id": 207,
    "text": "Hjertet vokser der du minst venter det.",
    "category": "inspiring"
  },
  {
    "id": 208,
    "text": "Du er ikke bak; du er akkurat der nysgjerrigheten trenger deg å være.",
    "category": "inspiring"
  },
  {
    "id": 209,
    "text": "Vinden er alltid nærmere enn du tror.",
    "category": "inspiring"
  },
  {
    "id": 210,
    "text": "Et fotavtrykk husker mer enn foten som satte det.",
    "category": "nonsense"
  },
  {
    "id": 211,
    "text": "Det er ingen skam i å hvile før stillheten.",
    "category": "inspiring"
  },
  {
    "id": 212,
    "text": "Stueplantene mine er vitner til forbrytelsene mine.",
    "category": "funny"
  },
  {
    "id": 213,
    "text": "Ingen stillheten er for liten til å forandre en tvilen.",
    "category": "inspiring"
  },
  {
    "id": 214,
    "text": "Stol på dagen, selv når vinteren er stille.",
    "category": "inspiring"
  },
  {
    "id": 215,
    "text": "Du bærer veien i deg, selv når du glemmer det.",
    "category": "inspiring"
  },
  {
    "id": 216,
    "text": "Gleden bygges av øyeblikk, ikke av hastverk.",
    "category": "inspiring"
  },
  {
    "id": 217,
    "text": "Jeg snakker med planter fordi de ikke svarer tilbake.",
    "category": "funny"
  },
  {
    "id": 218,
    "text": "Jeg har et PhD i å google symptomer og bekymre meg unødvendig.",
    "category": "funny"
  },
  {
    "id": 219,
    "text": "Brødristeren vet mer enn den lar deg tro.",
    "category": "nonsense"
  },
  {
    "id": 220,
    "text": "La tyngden minne deg på hvor langt kilden kan bære deg.",
    "category": "inspiring"
  },
  {
    "id": 221,
    "text": "Jeg snakker med planter fordi de ikke svarer tilbake.",
    "category": "funny"
  },
  {
    "id": 222,
    "text": "Paraplyer tror de er fugler, bare i hemmelighet.",
    "category": "nonsense"
  },
  {
    "id": 223,
    "text": "Trapper går opp og ned samtidig, avhengig av hvem som spør.",
    "category": "nonsense"
  },
  {
    "id": 224,
    "text": "Det du kaller stjernene, kan være begynnelsen på stillstanden.",
    "category": "inspiring"
  },
  {
    "id": 225,
    "text": "Jeg er ekspert på å lage lister jeg aldri fullfører.",
    "category": "funny"
  },
  {
    "id": 226,
    "text": "I stillheten mellom vinden og ensomheten bor svaret ditt.",
    "category": "inspiring"
  },
  {
    "id": 227,
    "text": "Utsikten begynner alltid som en hvisken, aldri som et rop.",
    "category": "inspiring"
  },
  {
    "id": 228,
    "text": "Min største prestasjon i dag er å stå opp i riktig rekkefølge.",
    "category": "funny"
  },
  {
    "id": 229,
    "text": "Jeg er ikke lat, jeg sparer energi til senere som aldri kommer.",
    "category": "funny"
  },
  {
    "id": 230,
    "text": "Det du kaller reisen, kan være begynnelsen på tvilen.",
    "category": "inspiring"
  },
  {
    "id": 231,
    "text": "Gleden husker alt det ukjente har gitt slipp på.",
    "category": "inspiring"
  },
  {
    "id": 232,
    "text": "Det som føles som lyset i dag, kan bli tvilen i morgen.",
    "category": "inspiring"
  },
  {
    "id": 233,
    "text": "Det du kaller havet, kan være begynnelsen på natten.",
    "category": "inspiring"
  },
  {
    "id": 234,
    "text": "Ingen øyeblikket er for liten til å forandre en frykten.",
    "category": "inspiring"
  },
  {
    "id": 235,
    "text": "Gratulerer med dagen Julie!",
    "category": "birthday"
  },
  {
    "id": 236,
    "text": "Kaffekopper snakker sammen når vi ikke hører etter.",
    "category": "nonsense"
  },
  {
    "id": 237,
    "text": "Stueplantene mine er vitner til forbrytelsene mine.",
    "category": "funny"
  },
  {
    "id": 238,
    "text": "Din morgenen har allerede begynt, du bare ikke sett den ennå.",
    "category": "inspiring"
  },
  {
    "id": 239,
    "text": "Stol på frøet, selv når stillheten er stille.",
    "category": "inspiring"
  },
  {
    "id": 240,
    "text": "Elefanter husker alt, unntatt hvorfor de begynte å huske.",
    "category": "nonsense"
  },
  {
    "id": 241,
    "text": "En dør vet alltid mer enn den forteller.",
    "category": "nonsense"
  },
  {
    "id": 242,
    "text": "Noen ganger er dagen nok til å snu en hel dag.",
    "category": "inspiring"
  },
  {
    "id": 243,
    "text": "Der tålmodigheten møter det ukjente, begynner noe nytt.",
    "category": "inspiring"
  },
  {
    "id": 244,
    "text": "Du bærer jorden i deg, selv når du glemmer det.",
    "category": "inspiring"
  },
  {
    "id": 245,
    "text": "Alle klokker viser rett tid et sted i universet.",
    "category": "nonsense"
  },
  {
    "id": 246,
    "text": "Der nysgjerrigheten møter utmattelsen, begynner noe nytt.",
    "category": "inspiring"
  },
  {
    "id": 247,
    "text": "Hvert skritt mot jorden er et skritt bort fra tvilen.",
    "category": "inspiring"
  },
  {
    "id": 248,
    "text": "Min største prestasjon i dag er å stå opp i riktig rekkefølge.",
    "category": "funny"
  },
  {
    "id": 249,
    "text": "Styrken i dag er roten til avstanden i morgen.",
    "category": "inspiring"
  },
  {
    "id": 250,
    "text": "Styrken husker alt natten har gitt slipp på.",
    "category": "inspiring"
  },
  {
    "id": 251,
    "text": "La mørket minne deg på hvor langt gleden kan bære deg.",
    "category": "inspiring"
  },
  {
    "id": 252,
    "text": "Veksten venter ikke på perfekt vær.",
    "category": "inspiring"
  },
  {
    "id": 253,
    "text": "Marsvin nynner når ingen ser på.",
    "category": "nonsense"
  },
  {
    "id": 254,
    "text": "Stjernene er ikke fraværet av frykt, men modet til å fortsette likevel.",
    "category": "inspiring"
  },
  {
    "id": 255,
    "text": "Snøfnugg planlegger reisen sin i flere måneder.",
    "category": "nonsense"
  },
  {
    "id": 256,
    "text": "Du trenger ikke se hele drømmen for å ta det første steget.",
    "category": "inspiring"
  },
  {
    "id": 257,
    "text": "Selv regnet finner alltid vei til stillheten.",
    "category": "inspiring"
  },
  {
    "id": 258,
    "text": "Din veien har allerede begynt, du bare ikke sett den ennå.",
    "category": "inspiring"
  },
  {
    "id": 259,
    "text": "Du trenger ikke se hele skogen for å ta det første steget.",
    "category": "inspiring"
  },
  {
    "id": 260,
    "text": "Ingen roen er for liten til å forandre en ensomheten.",
    "category": "inspiring"
  },
  {
    "id": 261,
    "text": "Morgenen vokser saktest, men holder lengst.",
    "category": "inspiring"
  },
  {
    "id": 262,
    "text": "Min største prestasjon i dag er å stå opp i riktig rekkefølge.",
    "category": "funny"
  },
  {
    "id": 263,
    "text": "Bak hver stillheten skjuler det seg en usikkerheten som venter på deg.",
    "category": "inspiring"
  },
  {
    "id": 264,
    "text": "Jeg har googlet 'hvordan være voksen' flere ganger enn jeg vil innrømme.",
    "category": "funny"
  },
  {
    "id": 265,
    "text": "Blyanter husker alt de aldri fikk skrive ned.",
    "category": "nonsense"
  },
  {
    "id": 266,
    "text": "Ingen pusten er for liten til å forandre en gjentakelsen.",
    "category": "inspiring"
  },
  {
    "id": 267,
    "text": "La nysgjerrigheten være din utmattelsen i dag.",
    "category": "inspiring"
  },
  {
    "id": 268,
    "text": "Du er ikke bak; du er akkurat der veksten trenger deg å være.",
    "category": "inspiring"
  },
  {
    "id": 269,
    "text": "Gnisten bygges av øyeblikk, ikke av hastverk.",
    "category": "inspiring"
  },
  {
    "id": 270,
    "text": "Kaffe først. Å være voksen etterpå.",
    "category": "funny"
  },
  {
    "id": 271,
    "text": "La havet være din frykten i dag.",
    "category": "inspiring"
  },
  {
    "id": 272,
    "text": "Veien bygges av øyeblikk, ikke av hastverk.",
    "category": "inspiring"
  },
  {
    "id": 273,
    "text": "Jorden er ikke fraværet av frykt, men modet til å fortsette likevel.",
    "category": "inspiring"
  },
  {
    "id": 274,
    "text": "Alle fugler kan i teorien lese kart, de bare later som.",
    "category": "nonsense"
  },
  {
    "id": 275,
    "text": "Utsikten bygges av øyeblikk, ikke av hastverk.",
    "category": "inspiring"
  },
  {
    "id": 276,
    "text": "Det du kaller elven, kan være begynnelsen på tvilen.",
    "category": "inspiring"
  },
  {
    "id": 277,
    "text": "I stillheten mellom øyeblikket og tvilen bor svaret ditt.",
    "category": "inspiring"
  },
  {
    "id": 278,
    "text": "Selv pusten finner alltid vei til ensomheten.",
    "category": "inspiring"
  },
  {
    "id": 279,
    "text": "Selv tilliten finner alltid vei til vinteren.",
    "category": "inspiring"
  },
  {
    "id": 280,
    "text": "La dagen være din kaoset i dag.",
    "category": "inspiring"
  },
  {
    "id": 281,
    "text": "Dagens plan: overleve, kanskje imponere noen.",
    "category": "funny"
  },
  {
    "id": 282,
    "text": "Vinden vokser der du minst venter det.",
    "category": "inspiring"
  },
  {
    "id": 283,
    "text": "Din regnet har allerede begynt, du bare ikke sett den ennå.",
    "category": "inspiring"
  },
  {
    "id": 284,
    "text": "Du er ikke bak; du er akkurat der kilden trenger deg å være.",
    "category": "inspiring"
  },
  {
    "id": 285,
    "text": "Det er ingen skam i å hvile før veksten.",
    "category": "inspiring"
  },
  {
    "id": 286,
    "text": "Alle klokker viser rett tid et sted i universet.",
    "category": "nonsense"
  },
  {
    "id": 287,
    "text": "Stol på veien, selv når ensomheten er stille.",
    "category": "inspiring"
  },
  {
    "id": 288,
    "text": "Selv roen finner alltid vei til natten.",
    "category": "inspiring"
  },
  {
    "id": 289,
    "text": "Selv den minste jorden kaster lys i mørket.",
    "category": "inspiring"
  },
  {
    "id": 290,
    "text": "La nysgjerrigheten være din tyngden i dag.",
    "category": "inspiring"
  },
  {
    "id": 291,
    "text": "Hjertet begynner alltid som en hvisken, aldri som et rop.",
    "category": "inspiring"
  },
  {
    "id": 292,
    "text": "Varmen husker alt avstanden har gitt slipp på.",
    "category": "inspiring"
  },
  {
    "id": 293,
    "text": "Havet vokser saktest, men holder lengst.",
    "category": "inspiring"
  },
  {
    "id": 294,
    "text": "Speil lyver aldri, men de sladrer heller aldri.",
    "category": "nonsense"
  },
  {
    "id": 295,
    "text": "Det du kaller bølgen, kan være begynnelsen på avstanden.",
    "category": "inspiring"
  },
  {
    "id": 296,
    "text": "Jeg sier 'bare fem minutter til' til både seng og skjerm.",
    "category": "funny"
  },
  {
    "id": 297,
    "text": "Dagen i dag er roten til tvilen i morgen.",
    "category": "inspiring"
  },
  {
    "id": 298,
    "text": "Jeg trener bare tommelen, men jeg gjør det ordentlig.",
    "category": "funny"
  },
  {
    "id": 299,
    "text": "Der stillheten møter tvilen, begynner noe nytt.",
    "category": "inspiring"
  },
  {
    "id": 300,
    "text": "Hver elven har rom for en ny begynnelse.",
    "category": "inspiring"
  },
  {
    "id": 301,
    "text": "Måneskinn er bare solen som er blitt sjenert.",
    "category": "nonsense"
  },
  {
    "id": 302,
    "text": "Gleden i dag er roten til utmattelsen i morgen.",
    "category": "inspiring"
  },
  {
    "id": 303,
    "text": "Du trenger ikke se hele vinden for å ta det første steget.",
    "category": "inspiring"
  },
  {
    "id": 304,
    "text": "Dagen i dag er roten til vinteren i morgen.",
    "category": "inspiring"
  },
  {
    "id": 305,
    "text": "Du trenger ikke se hele utsikten for å ta det første steget.",
    "category": "inspiring"
  },
  {
    "id": 306,
    "text": "Jeg er så god til å prokrastinere at det nesten er en jobb.",
    "category": "funny"
  },
  {
    "id": 307,
    "text": "Gnisten er ikke fraværet av frykt, men modet til å fortsette likevel.",
    "category": "inspiring"
  },
  {
    "id": 308,
    "text": "Ingen ilden er for liten til å forandre en stillstanden.",
    "category": "inspiring"
  },
  {
    "id": 309,
    "text": "Hver stjernene har rom for en ny begynnelse.",
    "category": "inspiring"
  },
  {
    "id": 310,
    "text": "Voksenlivet er bare å spørre 'hvor la jeg nøklene' på repeat.",
    "category": "funny"
  },
  {
    "id": 311,
    "text": "Regnbuer er himmelens måte å vise seg frem på.",
    "category": "nonsense"
  },
  {
    "id": 312,
    "text": "Hvert skritt mot havet er et skritt bort fra tvilen.",
    "category": "inspiring"
  },
  {
    "id": 313,
    "text": "Hvert skritt mot lyset er et skritt bort fra tvilen.",
    "category": "inspiring"
  },
  {
    "id": 314,
    "text": "Stueplantene mine er vitner til forbrytelsene mine.",
    "category": "funny"
  },
  {
    "id": 315,
    "text": "Hver regnet har rom for en ny begynnelse.",
    "category": "inspiring"
  },
  {
    "id": 316,
    "text": "Din bølgen har allerede begynt, du bare ikke sett den ennå.",
    "category": "inspiring"
  },
  {
    "id": 317,
    "text": "Jeg er verdensmester i utsettelse.",
    "category": "funny"
  },
  {
    "id": 318,
    "text": "Bak hver morgenen skjuler det seg en motstanden som venter på deg.",
    "category": "inspiring"
  },
  {
    "id": 319,
    "text": "Kaffekopper snakker sammen når vi ikke hører etter.",
    "category": "nonsense"
  },
  {
    "id": 320,
    "text": "Gå mot utsikten, selv om natten står i veien.",
    "category": "inspiring"
  },
  {
    "id": 321,
    "text": "Hver stemmen har rom for en ny begynnelse.",
    "category": "inspiring"
  },
  {
    "id": 322,
    "text": "La kilden være din tvilen i dag.",
    "category": "inspiring"
  },
  {
    "id": 323,
    "text": "En sky har aldri hastverk, og det er nettopp poenget.",
    "category": "nonsense"
  },
  {
    "id": 324,
    "text": "Ingen vet hvor lynet tar sokkene sine fra.",
    "category": "nonsense"
  },
  {
    "id": 325,
    "text": "Stol på kilden, selv når natten er stille.",
    "category": "inspiring"
  },
  {
    "id": 326,
    "text": "Pusten begynner alltid som en hvisken, aldri som et rop.",
    "category": "inspiring"
  },
  {
    "id": 327,
    "text": "Hvert skritt mot reisen er et skritt bort fra tvilen.",
    "category": "inspiring"
  },
  {
    "id": 328,
    "text": "La veien være din det ukjente i dag.",
    "category": "inspiring"
  },
  {
    "id": 329,
    "text": "Humør: 60% kaffe, 40% håp.",
    "category": "funny"
  },
  {
    "id": 330,
    "text": "Ingen har sett en snegl løpe, men alle vet den kan.",
    "category": "nonsense"
  },
  {
    "id": 331,
    "text": "Horisonten vokser saktest, men holder lengst.",
    "category": "inspiring"
  },
  {
    "id": 332,
    "text": "Stjerner blunker fordi de synes universet er morsomt.",
    "category": "nonsense"
  },
  {
    "id": 333,
    "text": "Bak hver gleden skjuler det seg en motstanden som venter på deg.",
    "category": "inspiring"
  },
  {
    "id": 334,
    "text": "La morgenen være din tomheten i dag.",
    "category": "inspiring"
  },
  {
    "id": 335,
    "text": "Elven vokser der du minst venter det.",
    "category": "inspiring"
  },
  {
    "id": 336,
    "text": "Klokker går rundt fordi de har glemt hvor de skal.",
    "category": "nonsense"
  },
  {
    "id": 337,
    "text": "Skygger er bare venner som ikke tør å si hei.",
    "category": "nonsense"
  },
  {
    "id": 338,
    "text": "Vinden hvisker oppskrifter ingen har bedt om.",
    "category": "nonsense"
  },
  {
    "id": 339,
    "text": "Bak hver gleden skjuler det seg en tvilen som venter på deg.",
    "category": "inspiring"
  },
  {
    "id": 340,
    "text": "Du trenger ikke se hele roen for å ta det første steget.",
    "category": "inspiring"
  },
  {
    "id": 341,
    "text": "Stol på vissheten, selv når vinteren er stille.",
    "category": "inspiring"
  },
  {
    "id": 342,
    "text": "Bak hver modet skjuler det seg en tyngden som venter på deg.",
    "category": "inspiring"
  },
  {
    "id": 343,
    "text": "Din roen trenger ingen andres godkjenning for å telle.",
    "category": "inspiring"
  },
  {
    "id": 344,
    "text": "Jeg trener tålmodighet ved å vente på at kaffen kjøler seg ned.",
    "category": "funny"
  },
  {
    "id": 345,
    "text": "Øyeblikket vokser der du minst venter det.",
    "category": "inspiring"
  },
  {
    "id": 346,
    "text": "Brødristeren vet mer enn den lar deg tro.",
    "category": "nonsense"
  },
  {
    "id": 347,
    "text": "Det som føles som regnet i dag, kan bli motstanden i morgen.",
    "category": "inspiring"
  },
  {
    "id": 348,
    "text": "Dagen er alltid nærmere enn du tror.",
    "category": "inspiring"
  },
  {
    "id": 349,
    "text": "Ingen drømmen er for liten til å forandre en natten.",
    "category": "inspiring"
  },
  {
    "id": 350,
    "text": "Gnisten vokser saktest, men holder lengst.",
    "category": "inspiring"
  },
  {
    "id": 351,
    "text": "Trapper går opp og ned samtidig, avhengig av hvem som spør.",
    "category": "nonsense"
  },
  {
    "id": 352,
    "text": "Morgenen husker alt stillheten har gitt slipp på.",
    "category": "inspiring"
  },
  {
    "id": 353,
    "text": "Bak hver frøet skjuler det seg en stormen som venter på deg.",
    "category": "inspiring"
  },
  {
    "id": 354,
    "text": "Gleden er ikke fraværet av frykt, men modet til å fortsette likevel.",
    "category": "inspiring"
  },
  {
    "id": 355,
    "text": "Du bærer lyset i deg, selv når du glemmer det.",
    "category": "inspiring"
  },
  {
    "id": 356,
    "text": "Selv den minste reisen kaster lys i mørket.",
    "category": "inspiring"
  },
  {
    "id": 357,
    "text": "Fuglesang er bare morgenens måte å rydde stemmen på.",
    "category": "nonsense"
  },
  {
    "id": 358,
    "text": "Kilden i dag er roten til tvilen i morgen.",
    "category": "inspiring"
  },
  {
    "id": 359,
    "text": "Alle ting faller nedover fordi de er nysgjerrige på bakken.",
    "category": "nonsense"
  },
  {
    "id": 360,
    "text": "Styrken begynner alltid som en hvisken, aldri som et rop.",
    "category": "inspiring"
  },
  {
    "id": 361,
    "text": "Du trenger ikke se hele roten for å ta det første steget.",
    "category": "inspiring"
  },
  {
    "id": 362,
    "text": "Ilden i dag er roten til usikkerheten i morgen.",
    "category": "inspiring"
  },
  {
    "id": 363,
    "text": "Min indre stemme har sluttet å ta meg på alvor.",
    "category": "funny"
  },
  {
    "id": 364,
    "text": "Det du kaller viljen, kan være begynnelsen på forandringen.",
    "category": "inspiring"
  },
  {
    "id": 365,
    "text": "Det er ingen skam i å hvile før øyeblikket.",
    "category": "inspiring"
  },
  {
    "id": 366,
    "text": "Dette er dag 366! Ekstra dag 8)",
    "category": "inspiring"
  }
];

/**
 * Get today's quote based on day-of-year.
 * @param {Date} date
 */
export function getQuoteOfTheDay(date = new Date()) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((date - startOfYear) / 86_400_000);
  const index = Math.min(dayOfYear, QUOTES.length - 1);
  return QUOTES[index].text;
}
