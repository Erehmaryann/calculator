// html variables
const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById('clear-btn');





const sendNumberValue = (number) => {
    calculatorDisplay.textContent = number;
};

// Add Event Listeners for numbers, operators, decimal buttons
inputBtns.forEach((inputBtn) => {
    // when no css class is assigned to the btn
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
    }
    // For btns that has the operator class
    else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
    }
    // for btns that has the decimal class
    else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener("click", () => sendNumberValue());
    }
});