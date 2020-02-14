//Hey Kunal - this was me working through stuff - Exercise One is script_ExerciseOne_Original.js

const paragraph =
  "The Answer to the Great Question Of Life, the Universe and Everything is Forty-two";

function findMatch(quote, searchTerm) {
  indexOfSearch = quote.indexOf(searchTerm);
  if (indexOfSearch === -1) {
    console.log(
      "The word " + "'" + searchTerm + "'" + " isn't in this quote, you dodo"
    );
  } else {
    console.log("The matching index is " + indexOfSearch);
  }
  //   return indexOfSearch;
}

findMatch(paragraph, "Answer");
findMatch(paragraph, "Blue");

// console.log(findMatch(paragraph, "Answer"));

function findFirstAndLastMatch(quote, searchTermStart, searchTermEnd) {
  indexSearchFirst = quote.indexOf(searchTermStart);
  indexSearchLast = quote.indexOf(searchTermEnd);
  console.log(indexSearchFirst);
  console.log(indexSearchLast);
}

findFirstAndLastMatch(paragraph, "Answer", "r");
