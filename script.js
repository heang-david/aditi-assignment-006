var calculator = {
    currentInput: "",
    currentOperator: null,
    previousInput:"",
    add: function (a,b) {
        return a + b;
    },
    subtract: function (a,b) {
        return a - b;
    },
    multiply: function (a,b) {
        return a * b;
    },
    divide: function (a,b) {
        return a / b;
    },
    clear: function ()
    {
        document.getElementById("math-display").textContent = "";
        document.getElementById("display").value = "";
        this.currentInput = "";
        this.currentOperator = null;
        this.previousInput = "";
    },

    appendNumber: function (number) {
        this.currentInput += number;
        document.getElementById("display").value = `${this.previousInput}${this.currentOperator || ""}${this.currentInput}`;
    },
    appendOperator: function (operator) {
        if (this.currentInput === "") return;
        this.previousInput = this.currentInput;
        this.currentInput = "";
        this.currentOperator = operator;
        document.getElementById("display").value = this.previousInput + operator;
    },
    calculate: function () {
        if (this.currentInput === "" || this.previousInput === "" || this.currentOperator === null) return;
        const a = parseFloat(this.previousInput);
        const b = parseFloat(this.currentInput);
        let result;
        switch (this.currentOperator) {
            case "+":
                result = this.add(a, b);
                break;
            case "-":
                result = this.subtract(a, b);
                break;
            case "*":
                result = this.multiply(a, b);
                break;
            case "/":
                result = this.divide(a, b);
                break;
        }
        document.getElementById("math-display").textContent = `${a} ${this.currentOperator} ${b}`;
        document.getElementById("display").value = result;
        this.currentInput = result.toString();
        this.previousInput = "";
        this.currentOperator = null;
    }
}

