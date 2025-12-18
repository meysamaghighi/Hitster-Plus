const questionBank = {
  "DeBarge|Rhythm Of The Night": [
    "Was DeBarge a family band with multiple siblings?",
    "Did DeBarge have other hit songs in the 1980s?",
    "Were the DeBarge family originally from Detroit?"
  ],

  "blink-182|All The Small Things": [
    "Did blink-182 start as a punk band in California?",
    "Has the band had multiple drummers over the years?",
    "Are blink-182 known for their humorous stage antics?"
  ],

  "kent|Dom andra": [
    "Is kent considered one of Sweden's most influential rock bands?",
    "Did kent sing exclusively in Swedish for most of their career?",
    "Was kent formed in the 1990s?"
  ],

  "Arvingarna|Eloise": [
    "Is Arvingarna a Swedish dansband group?",
    "Have Arvingarna competed in Melodifestivalen multiple times?",
    "Are Arvingarna still active as a band today?"
  ],

  "Crazy Town|Butterfly": [
    "Was Crazy Town a rap-rock band from Los Angeles?",
    "Did Crazy Town struggle to replicate this song's success?",
    "Were the band members involved in other musical projects?"
  ],

  "Twisted Sister|We're Not Gonna Take It": [
    "Was Dee Snider the lead singer of Twisted Sister?",
    "Did Twisted Sister wear elaborate makeup and costumes?",
    "Was the band part of the 1980s heavy metal scene?"
  ],

  "Brainpool|Bandstarter": [
    "Was Brainpool a Swedish alternative rock band?",
    "Did Brainpool form in the early 1990s?",
    "Were Brainpool influenced by British indie music?"
  ],

  "Haddaway|What Is Love - 7\" Mix": [
    "Was Haddaway born in Trinidad and raised in Germany?",
    "Did Haddaway become a one-hit wonder in many countries?",
    "Is Haddaway's real name Nestor Alexander Haddaway?"
  ],

  "Diana Ross|I'm Coming Out": [
    "Was Diana Ross the lead singer of The Supremes?",
    "Did Diana Ross have a successful solo career after The Supremes?",
    "Has Diana Ross won multiple Grammy Awards?"
  ],

  "Peter Cetera|Glory of Love": [
    "Was Peter Cetera the bassist and vocalist for Chicago?",
    "Did Peter Cetera leave Chicago to pursue a solo career?",
    "Has Peter Cetera written songs for other artists?"
  ],

  "Tommy Nilsson|Öppna din dörr": [
    "Is Tommy Nilsson a Swedish rock and pop singer?",
    "Has Tommy Nilsson represented Sweden in Eurovision?",
    "Did Tommy Nilsson start his career in the 1980s?"
  ],

  "Raymond & Maria|Ingen vill veta var du köpt din tröja": [
    "Are Raymond & Maria a Swedish indie pop duo?",
    "Did the duo form in the early 2000s?",
    "Are Raymond & Maria known for their quirky lyrics?"
  ],

  "John Farnham|You're the Voice": [
    "Is John Farnham considered an Australian music legend?",
    "Did John Farnham start as a teen pop star in the 1960s?",
    "Has John Farnham been inducted into the ARIA Hall of Fame?"
  ],

  "The Chainsmokers;Coldplay|Something Just Like This": [
    "Are The Chainsmokers an American DJ duo?",
    "Is Coldplay a British rock band formed in London?",
    "Have both artists won multiple Grammy Awards?"
  ],

  "Zara Larsson;MNEK|Never Forget You": [
    "Is Zara Larsson a Swedish pop singer?",
    "Did Zara Larsson win a talent show as a child?",
    "Is MNEK a British singer-songwriter and producer?"
  ],

  "PSY|Gangnam Style (강남스타일)": [
    "Is PSY a South Korean rapper and singer?",
    "Did PSY attend university in the United States?",
    "Has PSY released multiple albums in Korean?"
  ],

  "ABBA|Take A Chance On Me": [
    "Were ABBA from Sweden?",
    "Did ABBA win Eurovision Song Contest in 1974?",
    "Are the band members' names the source of 'ABBA'?"
  ],

  "Queen|Bohemian Rhapsody": [
    "Was Freddie Mercury Queen's lead vocalist?",
    "Did Queen form in London in the early 1970s?",
    "Was Brian May Queen's guitarist and astrophysicist?"
  ],

  "Avicii|Wake Me Up": [
    "Was Avicii a Swedish DJ and music producer?",
    "Did Avicii help popularize EDM worldwide?",
    "Was Avicii's real name Tim Bergling?"
  ],

  "Rednex|Cotton Eye Joe": [
    "Is Rednex a Swedish eurodance group?",
    "Did Rednex dress in American country/western style?",
    "Were Rednex formed in the 1990s?"
  ]
};

function generateQuestions(song) {
  const key = `${song.artist}|${song.title}`;
  return questionBank[key] || [
    `Did you know this song came out in ${song.year}?`,
    `Was ${song.artist} already well known at the time?`,
    "Does anyone remember where they first heard this song?"
  ];
}
