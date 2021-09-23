// html variables
const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById('clear-btn');

let firstVal = 0;
let operatorValue = "";
let awaitingNextValue = false;



const sendNumberValue = (number) => {
    //Replace current display value if first value is entered
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        // If the curr display value is 0, replace it, if not add number
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === "0" ? number : displayValue + number;
    }
};

const addDecimal = () => {
    // If operator pressed, don't add decimal
    if (awaitingNextValue) return;
    // If no decimal, add one
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
};

// Calculate first and second values depending on operator
const calculate = {
    '/': (firstNum, secondNum) => firstNum / secondNum,

    '*': (firstNum, secondNum) => firstNum * secondNum,

    '+': (firstNum, secondNum) => firstNum + secondNum,

    '-': (firstNum, secondNum) => firstNum - secondNum,

    '=': (firstNum, secondNum) => secondNum,
};

const useOperator = (operator) => {
    const currValue = Number(calculatorDisplay.textContent);
    // Prevent multiple operators
    if (operatorValue && awaitingNextValue) return;
    // Assign firstValue if no value
    if (!firstVal) {
        firstVal = currValue;
    } else {
        console.log(firstVal, operatorValue, currValue);
        const calculation = calculate[operatorValue](firstVal, currValue);
        console.log("cal", calculation);
    }
    // Ready for next value, store operator
    awaitingNextValue = true; //it turns true after hitting the operator btn
    operatorValue = operator;
};

// Add Event Listeners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
    // when no css class is assigned to the btn
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
    }
    // For btns that has the operator class
    else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener("click", () => useOperator(inputBtn.value));
    }
    // for btns that has the decimal class
    else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener("click", () => addDecimal());
    }
});

// Reset all values, display
const resetAll = () => {
    firstVal = 0;
    operatorValue = "";
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
};

// Clear Button Event Listener
clearBtn.addEventListener("click", resetAll);