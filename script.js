const display = document.querySelector('#display');
const answerDisplay = document.querySelector('.answer')
const numbers = document.querySelector('#numbers')
const clear = document.querySelector('.clear')
const operators = document.querySelector('#operators')
let firstInput;
let secondInput;
let chosenOperation;
let answerArray =[];
let clickedOperators;
let answer;
let nonEqual;
let operationArray = [];


function add(num1,num2){  // function for addition
    return Number(num1) + Number(num2);
}

function subtract(num1,num2){  // function for subtraction
    return Number(num1) - Number(num2);
}

function multiply(num1,num2){  // function for multiplication
    return Number(num1) * Number(num2);
}

function divide(num1,num2){  // function for division
    return Number(num1) / Number(num2);
}

function operate(operator,num1,num2){ // function for math operation 
    if (operator == 'plus'){
        return add(num1,num2);
    }
    if (operator == 'minus'){
        return subtract(num1,num2);
    }    if (operator == 'times'){
        return multiply(num1,num2);
    }    if (operator == 'divides'){
        return divide(num1,num2);
    }
}

 function numberClick() { // created function for pressed number input
    numbers.addEventListener('click', function (e) {
        let clickedNumber  = e.target.getAttribute('class');
        if (clickedNumber == 'zero' && answerDisplay.textContent != '0'){
            answerDisplay.textContent = answerDisplay.textContent +0;
        }
        if (clickedNumber == 'one'){
            if (answerDisplay.textContent == '0'){
                answerDisplay.textContent = ''
            }
            answerDisplay.textContent = answerDisplay.textContent +1;
        }
        if (clickedNumber == 'two'){
            if (answerDisplay.textContent == '0'){
                answerDisplay.textContent = ''
            }
            answerDisplay.textContent = answerDisplay.textContent +2;
        }
        if (clickedNumber == 'three'){
            if (answerDisplay.textContent == '0'){
                answerDisplay.textContent = ''
            }
            answerDisplay.textContent = answerDisplay.textContent +3;
        }
        if (clickedNumber == 'four'){
            if (answerDisplay.textContent == '0'){
                answerDisplay.textContent = ''
            }
            answerDisplay.textContent = answerDisplay.textContent +4;
        }
        if (clickedNumber == 'five'){
            if (answerDisplay.textContent == '0'){
                answerDisplay.textContent = ''
            }
            answerDisplay.textContent = answerDisplay.textContent +5;
        }
        if (clickedNumber == 'six'){
            if (answerDisplay.textContent == '0'){
                answerDisplay.textContent = ''
            }
            answerDisplay.textContent = answerDisplay.textContent +6;
        }
        if (clickedNumber == 'seven'){
            if (answerDisplay.textContent == '0'){
                answerDisplay.textContent = ''
            }
            answerDisplay.textContent = answerDisplay.textContent +7;
        }
        if (clickedNumber == 'eight'){
            if (answerDisplay.textContent == '0'){
                answerDisplay.textContent = ''
            }
            answerDisplay.textContent = answerDisplay.textContent +8;
        }
        if (clickedNumber == 'nine'){
            if (answerDisplay.textContent == '0'){
                answerDisplay.textContent = ''
            }
            answerDisplay.textContent = answerDisplay.textContent +9;
        }
    });
};

function clearClick() { // created button for clear function
    clear.addEventListener('click', function (e) {
        answerDisplay.textContent = '0';
        answerArray = [];
        operationArray=[];
        
    });
};

function operatorClick() { // created a function for operator input logc
    let answerLength = answerArray.length;
    operators.addEventListener('click', function (e) {
        clickedOperators  = e.target.getAttribute('class');
        if (!clickedOperators == false && clickedOperators!='equal'){
            answerArray.push(Number(answerDisplay.textContent));
            answerDisplay.textContent = ""
            operationArray.push(clickedOperators);
            if (answerArray.length > 1){
                nonEqual = operationArray[operationArray.length-2];
                answer = operate(nonEqual,answerArray[answerArray.length-2],answerArray[answerArray.length-1]);
                answerDisplay.textContent = answer;
                
            }
        }
        if (clickedOperators=='equal'){
            answerArray.push(Number(answerDisplay.textContent));
            nonEqual = operationArray[operationArray.length-1]
            answer = operate(nonEqual,answerArray[answerArray.length-2],answerArray[answerArray.length-1]);
            answerDisplay.textContent = answer;
        }

    });
};



numberClick();
clearClick();
operatorClick();