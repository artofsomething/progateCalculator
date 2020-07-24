let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";
let result = "";
const inputOperator = (operator) => {
    if(calculationOperator===''){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "";
}
const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const inputNumber = (number) => {
    if (currentNumber === '0' || currentNumber===result) {
        currentNumber = number;
    } else currentNumber += number;
}
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener("click", (event) => {
    calculate();
    updateScreen(currentNumber);
});
const percentage = document.querySelector(".percentage");
percentage.addEventListener("click",(event)=>{
    inputOperator(event.target.value);
});
const calculate = () => {
    //let result = "";
    let A = parseFloat(prevNumber);
    let B = parseFloat(currentNumber);

    switch (calculationOperator) {
        case "+":
            result = A + B;
            break;
        case "-":
            result = A - B;
            break;
        case "*":
            result = A * B;
            break;
        case "/":
            result = A / B;
            break;
        case "%":
            result = (A/100) * B;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = "";
}
const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener("click",(event)=>{
    clearAll();
    updateScreen(currentNumber);
});

const clearAll=()=>{
    prevNumber="";
    calculationOperator="";
    currentNumber = "0";
}
inputDecimal = (dot)=>{
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber+=dot;
}
const decimal = document.querySelector('.decimal');
decimal.addEventListener("click",(event)=>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});