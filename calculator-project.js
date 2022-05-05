// why backspace not working
// decimal point wah
// textContent gets the content of all elements, including <script> and <style> elements.

// Locating keys and connecting the buttons
// Created Array of Number Buttons

let currentNumber = "";
let previousNumber = ""
let operator = "";
let displayValue ="0";
let result = "";

// Start on display
const display = document.querySelector('#display-output')

const buttonsKeys = ["buttonNum0", "buttonNum1", "buttonNum2", "buttonNum3", "buttonNum4", "buttonNum5", "buttonNum6", "buttonNum7", "buttonNum8", "buttonNum9"]

const operators = document.querySelectorAll(".buttons__operator");

for (let i = 0; i < buttonsKeys.length; i++) {
  const button = document.getElementById(buttonsKeys[i]);
  button.addEventListener('click', () => displayNumber(i))
  }
 
const displayNumber =(i) => {
    currentNumber += i;
    display.textContent = currentNumber;
}
// keeps track of operator
// move current to previous number
// equal current number nothing

const inputOperator = (n) => {
  if (operator.length >= 1) 
  return; 
  operator = n; 
  display.textContent = operator;
  currentNumber = previousNumber;
  previousNumber = "";
}

// Operatorationzzzz//////


//Division
const division = document.getElementById("buttonDivision");
division.addEventListener('click', () => inputOperator("÷"));

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
const AutoclearButton = document.getElementById('buttonAutoClear');
AutoclearButton.addEventListener("click",() => clear() )

const clear = () => {
 currentNumber = "";
 operator = "";
 display.textContent = displayValue;;
}
// THIS PART AIN'T WORKING FML 
  
const buttonEqual = document.getElementById("buttonEqual");

buttonEqual.addEventListener('click', event => {

  if (operator === "+") {
    result = (parseInt(currentNumber)+(parseInt(previousNumber)));
    display(result);
  } else if (operator === "-") {
    result = ((parseInt(currentNumber))-(parseInt(previousNumber)));
    display(result);
  } else if (operator === "÷") {
    result = parseInt(currentNumber)/(parseInt(previousNumber));
    display(result);
  } else if (operator === "x") {
    result = parseInt(currentNumber)*(parseInt(previousNumber))
    display(result);
  } 
})





