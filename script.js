const display = document.querySelector('#display');
const answerDisplay = document.querySelector('.answer')
const numbers = document.querySelector('#numbers')
const clear = document.querySelector('.clear')
const operators = document.querySelector('#operators')
const actionDisplay = document.querySelector('.toprow')
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
    if (operator == '+'){
        return add(num1,num2);
    }
    if (operator == '-'){
        return subtract(num1,num2);
    }    if (operator == '×'){
        return multiply(num1,num2);
    }    if (operator == '÷'){
        return divide(num1,num2);
    }
}

 function numberClick() { // created function for pressed number input
    numbers.addEventListener('click', function (e) {
        let clickedNumber  = e.target.getAttribute('class');
       // if (answerDisplay.textContent =)
        
        
        
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
        actionDisplay.textContent= '0';
        answerArray = [];
        operationArray=[];

        
    });
};

function operatorClick() { // created a function for operator input logc
    operators.addEventListener('click', function (e) {
        clickedOperators  = e.target.getAttribute('class');
        if (!clickedOperators == false && clickedOperators!='='){
            if (actionDisplay.textContent=='0'){
                actionDisplay.textContent=''
            }
            answerArray.push(Number(answerDisplay.textContent));
            actionDisplay.textContent += answerDisplay.textContent+clickedOperators
            answerDisplay.textContent = '0';
            operationArray.push(clickedOperators);
            if (answerArray.length > 1){
                nonEqual = operationArray[operationArray.length-2];
                answer = operate(nonEqual,answerArray[answerArray.length-2],answerArray[answerArray.length-1]);
                answerArray.push(answer);
                actionDisplay.textContent = answer +clickedOperators
                console.log(answerArray)
                console.log(typeof actionDisplay.textContent)
                
            }
        }
        if (clickedOperators=='='){
            answerArray.push(Number(answerDisplay.textContent));
            nonEqual = operationArray[operationArray.length-1]
            answer = operate(nonEqual,answerArray[answerArray.length-2],answerArray[answerArray.length-1]);
            actionDisplay.textContent = actionDisplay.textContent+answerDisplay.textContent;
            answerArray.push(answer)
            answerDisplay.textContent = answer;
            actionDisplay.textContent= '0';
            answerArray = [];
            
        }

    });
};


function clearDisplay(){
    
}

numberClick();
clearClick();
operatorClick();