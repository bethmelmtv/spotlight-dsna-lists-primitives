module.exports = { reverseWords };

function reverseWords(sentence) {
  return (
    sentence
      .split(" ") //converting a sentence to an array of words
      // .map((letter) => sentence.reverse()) // mapping through the array of
      .map((letter) => letter.split("").reverse().join(""))
      .join(" ")
  );
  //emptry string
  // map // for loop through a string(sentence), for each letter,
  //append it to the emptry string
  //return empty string
  return;
}
