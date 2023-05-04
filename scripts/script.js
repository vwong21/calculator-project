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

const specialKeys = ["=", "+/-", "C", "( )", "/", "%", "*", "-"]

let answer = '';

const resetRule = function () {
    if (displayContent.textContent == answer) {
        displayContent.innerHTML = '';
    } else {
        //pass
    }
}



column.forEach(key => {
    key.addEventListener('click', () => {
        if (!specialKeys.includes(key.textContent)) {
            resetRule();
            displayContent.innerHTML += key.textContent;
            pressedKeys.push(key.textContent);

        } else if (key.textContent == "C") {
            displayContent.innerHTML = "";

        } else if (key.textContent == "=") {
            answer = eval(pressedKeys.join(''))
            if (answer == undefined) {
                answer = '';
            }
            displayContent.innerHTML = answer
            pressedKeys = [];
        }
    })
})
