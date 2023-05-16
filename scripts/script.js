const displayContent = document.getElementById('display-content');

const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const clear = document.getElementById('clear');
const brackets = document.getElementById('brackets');
const percent = document.getElementById('percent');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const subtract = document.getElementById('subtract');
const addition = document.getElementById('addition');
const posNeg = document.getElementById('pos-neg');
const decimal = document.getElementById('decimal');
const equal = document.getElementById('equal');
const column = document.querySelectorAll('.col');

let pressedKeys = [];

const specialKeys = ["=", "+/-", "C", "( )", "/", "%", "*", "-", "+"]

const operators = ["+", "-", "*", "/", "%"]

let answer = '';

const resetRule =  () => {
    // if the answer is the same as displayed, pressedKeys list becomes empty and the display becomes empty
    if (displayContent.textContent == answer) {
        pressedKeys = [];
        displayContent.innerHTML = '';
    } else {
        //pass
    }
}

column.forEach(key => {
    key.addEventListener('click', () => {

        // if the pressed key is not a special key, reset the display, add the pressed key to the display, and add the pressed ke to pressedKeys list
        if (!specialKeys.includes(key.textContent)) {
            resetRule();    
            displayContent.innerHTML += key.textContent;
            pressedKeys.push(key.textContent);

        // if the Clear button is pressed, reset the display    
        }else if (key.textContent == "C") {
            resetRule();

        // if the enter key is pressed, the answer variable is set to the sum of the pressedKeys list. if the answer is undefined, the answer variable is set to nothing
        } else if (key.textContent == "=") {
            console.log(pressedKeys.join(''))
            answer = eval(pressedKeys.join(''))
            if (answer == undefined) {
                answer = '';
            }
            // the display is set to the answer
            displayContent.innerHTML = answer
        
        // if the pressed key is an operator and the display is empty, nothing is added to the display
        } else if (operators.includes(key.textContent)) {
            if(displayContent.textContent == ''){
                //pass
            }else {
                displayContent.innerHTML += key.textContent;
                pressedKeys.push(key.textContent);
            }
        }
    })
})
