let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

const operators = ['+', '-', '*', '/', '%'];

function updateDisplay() {
    input.value = string;
}

function getLastNumber(expression) {
    let parts = expression.split(/[+\-*/%]/);
    return parts[parts.length - 1];
}

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.currentTarget.textContent.trim();

        if (value === '=') {
            if (string === "") return;

            let lastChar = string.slice(-1);
            if (operators.includes(lastChar) || lastChar === '.') return;

            try {
                string = String(eval(string));
                updateDisplay();
            } catch {
                string = "";
                input.value = "Error";
            }
        } 
        else if (value === 'AC') {
            string = "";
            updateDisplay();
        } 
        else if (value === 'DEL') {
            string = string.slice(0, -1);
            updateDisplay();
        } 
        else {
            let lastChar = string.slice(-1);
            let isNewOperator = operators.includes(value);
            let isLastOperator = operators.includes(lastChar);

            if (string === "" && isNewOperator) {
                if (value === '-') {
                    string = value;
                    updateDisplay();
                }
                return;
            }

            if (isLastOperator && isNewOperator) {
                string = string.slice(0, -1) + value;
                updateDisplay();
                return;
            }

            if (value === '.') {
                let lastNumber = getLastNumber(string);

                if (lastNumber.includes('.')) return;

                if (string === "" || isLastOperator) {
                    string += "0.";
                } else {
                    string += ".";
                }

                updateDisplay();
                return;
            }

            string += value;
            updateDisplay();
        }
    });
});
