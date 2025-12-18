function generateQuestions(song) {
  const questions = [];

  if (song.year < 2000) {
    questions.push("Was this released before or after 2000?");
  }

  questions.push(`Was ${song.artist} already famous before this song?`);
  questions.push(`Who in the room remembers hearing this when it first came out?`);
  questions.push(`Is this song older or younger than the youngest player here?`);

  if (song.year < 1990) {
    questions.push("Was this released before the internet was public?");
  }

  return questions.slice(0, 3);
}