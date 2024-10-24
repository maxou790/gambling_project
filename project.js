const prompt = require("prompt-sync")();

const ROWS= 3;

const COLS =3;

const SYMBOLS_COUNT = {
A: 2,
B: 4,
C: 6,
D: 8,
};

const SYMBOL_VALUES = {
A: 5,
B: 4,
C: 3,
D: 2,
};


const deposit = () => {
while (true) {
  const depositAmount = prompt("Enter a deposit amount");
  const numberDepositAmount = parseFloat(depositAmount);

   if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
     console.log("Invalid deposit amount, try again.");
  } else {
    return numberDepositAmount;
   }
 }
};

const getNumberOflines = () => {
 while (true) {
  const lines = prompt("Enter the number of lines to bet on (1-3: ");
  const numberOflines = parseFloat(lines);

  if (isNaN(numberOflines) || numberOflines <= 0 || numberOflines > 3) {
      console.log("Invalid number of lines, try again. " );
  } else {
    return numberOflines;
  }

}
};
  