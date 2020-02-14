let pyramidSymbol = "#";

function pyramidPattern(row, repeat) {
  //make groups of them
  for (let k = 1; k <= repeat; k++) {
    pyramid(row);
  }
}

function pyramid(row) {
  for (let i = 1; i < row; i++) {
    console.log(pyramidSymbol.repeat(i));
  }
  for (let j = row; j >= 2; j--) {
    console.log(pyramidSymbol.repeat(j));
  }
}

pyramidPattern(7, 3);
