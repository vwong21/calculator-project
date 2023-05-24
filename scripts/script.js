const displayContent = document.getElementById('display-content');
const column = document.querySelectorAll('.col');

let pressedKeys = [];

const specialKeys = ["=", "C", "( )", "/", "%", "*", "-", "+", "<"]

const operators = ["+", "-", "*", "/"]

let answer = '';

column.forEach(key => {
    key.addEventListener('click', () => {
        
        // if the pressed key is not a special key, reset the display, add the pressed key to the display and pressedKeys array
        if (!specialKeys.includes(key.textContent)) {
            if (displayContent.textContent == answer) {
                pressedKeys = [];
                displayContent.innerHTML = ''
            } 
            displayContent.innerHTML += key.textContent;
            pressedKeys.push(key.textContent);

        // if the Clear button is pressed, reset the display    
        }else if (key.textContent == "C") {
            pressedKeys = [];
            displayContent.innerHTML = "";

        // if the enter key is pressed, the answer variable is set to the sum of the pressedKeys array. if the answer is undefined, the answer variable is set to nothing
        } else if (key.textContent == "=") {
            answer = eval(pressedKeys.join(''))
            if (answer == undefined) {
                answer = '';
            } else if (answer == 'Infinity') {
                answer = '∞'
            }
            // the display is set to the answer
            displayContent.innerHTML = answer
            pressedKeys = [answer]
        
        // if the % key is pressed then /100 is pushed to the array
        } else if (key.textContent == '%') {
            if (operators.includes(pressedKeys[pressedKeys.length - 1])) {
                //pass
            } else {
                pressedKeys.push('/100')
                displayContent.innerHTML += '%'
            }
            

        // if the pressed key is an operator and the display is empty, nothing is added to the display
        } else if (operators.includes(key.textContent)) {
            if(displayContent.textContent == '' || operators.includes(pressedKeys[pressedKeys.length - 1])) {
                //pass
            }else {
                displayContent.innerHTML += key.textContent;
                pressedKeys.push(key.textContent);
            }

        // if backspace is pressed, remove the last character from the display and the last item from the pressedKeys array
        } else if (key.textContent == '<') {
            pressedKeys.pop()
            displayContent.innerHTML = pressedKeys.join('')

        // In the case that the bracket is pressed, if the display is empty and the last pressed key was an operator, then '(' will be displayed. Otherwise, if the pressed key doesn't include '(', then '*(' will be displayed. Otherwise, ')' will be displayed
        } else if (key.textContent == '( )') {
            if (displayContent.textContent == '' || operators.includes(pressedKeys[pressedKeys.length - 1])) {
                displayContent.innerHTML += '('
                pressedKeys.push('(')
            } else if (!pressedKeys.includes('(')) {
                pressedKeys.push('*')
                pressedKeys.push('(')
                displayContent.innerHTML = pressedKeys.join('')
            } else {
                displayContent.innerHTML += ')'
                pressedKeys.push(')') 
            }
        }
 
        console.log(displayContent.textContent)
        console.log(pressedKeys)
        console.log(displayContent.textContent.length)
    })
})
