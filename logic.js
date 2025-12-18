const questionBank = {
  "DeBarge|Rhythm Of The Night": [
    "Did you know this song was written for the movie *The Last Dragon*?",
    "Was DeBarge one of Motown’s biggest family bands of the 1980s?",
    "Does this song mix funk, pop, and Latin-inspired rhythms?"
  ],

  "blink-182|All The Small Things": [
    "Was this song written partly as a joke about boy band music videos?",
    "Did the video parody Backstreet Boys and NSYNC?",
    "Did this track help bring pop-punk into the mainstream?"
  ],

  "kent|Dom andra": [
    "Is this one of Kent’s most politically interpreted songs?",
    "Did Kent become Sweden’s biggest rock band in the early 2000s?",
    "Was this song part of Kent’s darker, more electronic era?"
  ],

  "Arvingarna|Eloise": [
    "Did this song win Melodifestivalen in the early 1990s?",
    "Is Arvingarna known for blending pop with traditional Swedish dance music?",
    "Was this a huge radio hit across Scandinavia?"
  ],

  "Crazy Town|Butterfly": [
    "Did this song sample Red Hot Chili Peppers?",
    "Was this Crazy Town’s only global mega-hit?",
    "Did this song reach number one in multiple countries?"
  ],

  "Twisted Sister|We're Not Gonna Take It": [
    "Was this song turned into an anti-authority anthem?",
    "Did the band become famous for their outrageous music videos?",
    "Was this song frequently protested but still hugely popular?"
  ],

  "Brainpool|Bandstarter": [
    "Was Brainpool part of the Swedish 90s indie-pop scene?",
    "Did this song get heavy rotation on Swedish radio?",
    "Was the band influenced by British pop rock?"
  ],

  "Haddaway|What Is Love - 7\" Mix": [
    "Did this song become a club anthem in the 1990s?",
    "Is this song strongly associated with the movie *Night at the Roxbury*?",
    "Was Haddaway originally born in Trinidad?"
  ],

  "Diana Ross|I'm Coming Out": [
    "Was this song written as a celebration of individuality?",
    "Did it become a major LGBTQ+ anthem?",
    "Was Diana Ross already a superstar from The Supremes?"
  ],

  "Peter Cetera|Glory of Love": [
    "Was this song written for *The Karate Kid Part II*?",
    "Was Peter Cetera previously the lead singer of Chicago?",
    "Did this song top the US charts?"
  ],

  "Tommy Nilsson|Öppna din dörr": [
    "Did this song win Melodifestivalen?",
    "Was Tommy Nilsson already popular internationally before this?",
    "Is this considered a Swedish power ballad classic?"
  ],

  "Raymond & Maria|Ingen vill veta var du köpt din tröja": [
    "Did this song become an unexpected indie hit in Sweden?",
    "Is the title intentionally ironic and humorous?",
    "Did it gain popularity mainly through radio play?"
  ],

  "John Farnham|You're the Voice": [
    "Did this song become an anthem in Australia?",
    "Does the song include bagpipes?",
    "Was John Farnham already famous before this hit?"
  ],

  "The Chainsmokers;Coldplay|Something Just Like This": [
    "Was this Coldplay’s first major EDM collaboration?",
    "Did the song premiere at an awards show?",
    "Does it reference superheroes in the lyrics?"
  ],

  "Zara Larsson;MNEK|Never Forget You": [
    "Did this song help launch Zara Larsson internationally?",
    "Was MNEK also the songwriter on this track?",
    "Did it chart across Europe and the US?"
  ],

  "PSY|Gangnam Style (강남스타일)": [
    "Was this the first YouTube video to reach 1 billion views?",
    "Is Gangnam a wealthy district in Seoul?",
    "Did this song turn PSY into a global star overnight?"
  ],

  "ABBA|Take A Chance On Me": [
    "Did ABBA use a vocal loop instead of instruments at the start?",
    "Was this song released during ABBA’s global peak?",
    "Did it top charts in multiple countries?"
  ],

  "Queen|Bohemian Rhapsody": [
    "Did this song break traditional pop song structure?",
    "Was it considered too long for radio at first?",
    "Did it regain popularity decades later through a movie?"
  ],

  "Avicii|Wake Me Up": [
    "Did this song blend EDM with folk and country influences?",
    "Was it Avicii’s first global number-one hit?",
    "Did it change how electronic music sounded on the radio?"
  ],

  "Rednex|Cotton Eye Joe": [
    "Is this song based on a traditional folk tune?",
    "Did it mix eurodance with country imagery?",
    "Was it a massive hit at parties and sports events?"
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
