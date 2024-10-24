const prompt = require("prompt-sync")();

const deposit =50 () => {
  const depositAmount = prompt("Enter a deposit amount");
  const numberDepositAmount = parseFloat(depositAmount);

  if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
     console.log("Invalid deposit amount, try again.");
  }
}

deposit();
