const quote = "I don't wanna wait for our lives to be over";
let change = "wanna";

function changeSearchWord(stringQuote, searchWord) {
  if (string.search(searchWord) === -1) {
    return false;
  } else {
    return capitalizeWord(stringQuote, searchWord);
  }
}

function capitalizeWord(originalStringQuote, originalSearchWord) {
  let newQuote = originalStringQuote.replace(
    originalSearchWord,
    originalSearchWord.toUpperCase()
  );
  return newQuote;
}

console.log(capitalizeWord(quote, change));

console.log(
  capitalizeWord(quote, "wait", function(
    originalStringQuote,
    originalSearchWord
  ) {
    let newQuote = originalStringQuote.replace(
      originalSearchWord,
      originalSearchWord.toUpperCase()
    );
    return newQuote;
  })
);
