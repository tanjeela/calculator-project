let currentNumber = ""; //RESETS AS AN EMPTY STRING
let previousNumber = "";
let operator = "";
let displayValue ="";

const display = document.querySelector('#display-output');

const operators = document.querySelectorAll(".buttons__operator");

const buttonsKeys = ["buttonNum0", "buttonNum1", "buttonNum2", "buttonNum3", "buttonNum4", "buttonNum5", "buttonNum6", "buttonNum7", "buttonNum8", "buttonNum9"]

for (let i = 0; i < buttonsKeys.length; i++) {
  const button = document.getElementById(buttonsKeys[i]);
  button.addEventListener('click', () => displayNumber(i))
  }
const displayNumber =(i) => {
    currentNumber += i;
    display.textContent = currentNumber;
}

const inputOperator = (n) => {
  if (operator.length >= 1) 
  return; 
  operator = n; 
  display.textContent = operator;
  previousNumber = currentNumber; //Reassigned previous number as current number which is why Division
  // and subtraction requires to be shifted around as it will complete operation on empty string. Check with Aiden if this is correct
  currentNumber = "";
}

// Operatorations

//Division
const division = document.getElementById("buttonDivision");
division.addEventListener('click', () => inputOperator("/"));

// Multiplication
const multiplication = document.getElementById("buttonMultiplication");   
multiplication.addEventListener('click', () => inputOperator("*"));

//Subraction
const subtraction = document.getElementById("buttonSubtract");
subtraction.addEventListener('click', () => inputOperator("-"));

//Addition
const addition = document.getElementById("buttonAddition");   
addition.addEventListener('click', () => inputOperator("+"));

// AC Button
const AutoclearButton = document.getElementById("buttonAutoClear");
AutoclearButton.addEventListener("click",() => clear() )
const clear = () => {
 currentNumber = "";
 operator = "";
 display.textContent = "";
}

// Decimal Button

const decimal = document.getElementById("buttonDecimal");
decimal.addEventListener('click', () => inputDecimalButton("."));
const inputDecimalButton = (i) => {
  currentNumber += i;
}

// Equal Button
const buttonEqual = document.getElementById("buttonEqual");   
buttonEqual.addEventListener('click', () =>equals(previousNumber, operator, currentNumber));


const equals = (previousNumber, operator, currentNumber) => {
  // The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.
  currentNumber = parseFloat(currentNumber);
  previousNumber = parseFloat(previousNumber);
  let result = "";
  if (operator === "+") {
    result = currentNumber + previousNumber;
    display.textContent =(result);
  } else if (operator === "-") {
    // Michelle HACK --> From note in inputOperator
    result = previousNumber - currentNumber;
    display.textContent =(result);
  } else if (operator === "/") {
    // Michelle HACK --> From note in inputOperator
    result = previousNumber / currentNumber;
    display.textContent = result;
  } else if (operator === "*") {
    result = currentNumber*previousNumber;
    display.textContent =(result);
  } 
  return result;

}

