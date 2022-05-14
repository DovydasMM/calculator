const display = document.querySelector('#display');
const answerDisplay = document.querySelector('.answer')
const numbers = document.querySelector('#numbers')
const clear = document.querySelector('.clear')
const operators = document.querySelector('#operators')
let firstInput
let secondInput
let chosenOperation
//answerDisplay.style.backgroundColor = 


function add(num1,num2){  // function for addition
    return num1 + num2;
}

function subtract(num1,num2){  // function for subtraction
    return num1 - num2;
}

function multiply(num1,num2){  // function for multiplication
    return num1 * num2;
}

function divide(num1,num2){  // function for division
    return num1 / num2;
}

function operate(operator,num1,num2){ // function for math operation 
    
    
    
    
    return operator(num1,num2);       // (calls all above listed fucntion)
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
    });
};


function operatorClick() { // created a function for operator input
    operators.addEventListener('click', function (e) {
        let clickedOperators  = e.target.getAttribute('class');
        if (clickedOperators == 'plus'){
            firstInput = Number(answerDisplay.textContent)
            answerDisplay.textContent = '0';
            chosenOperation = clickedOperators;
        }
        if (clickedOperators == 'equal'){
            secondInput = Number(answerDisplay.textContent)
            answerDisplay.textContent = firstInput+secondInput;
            console.log(chosenOperation);
        }


        
        
    });
};


numberClick();
clearClick();
operatorClick();