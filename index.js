module.exports = { reverseWords, capitalizeWords, oddishOrEvenish, at };

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

function capitalizeWords(sentence) {
  const words = sentence.split(" ");
  const final = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return final.join(" ");
  // .split(' ')
  // .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  // .join(' ');
}

function oddishOrEvenish(number) {
  // add(Number(number.toString.split("")));
  const array = number.toString().split(" ");
  const initialValue = 0;
  const theSum = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  if (theSum % 2 === 0) {
    return "Evenish";
  } else {
    return "Oddish";
  }
}

function at(arr, index) {
  const item = arr[index];
  return item;
}