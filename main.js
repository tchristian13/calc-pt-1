        let firstNumber = ""; 
        let secondNumber = "";
        let operator = "";
        
        const buttons = document.querySelectorAll(".button");
        const display = document.querySelector("#display");
        
        // Helper function to update the display
        function updateDisplay() {
          display.innerText = firstNumber + " " + operator + " " + secondNumber;
        }
        
        // Calculate result
        function calculate(num1, num2, operator) {
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);
        
          switch (operator) {
            case "+":
              return (num1 + num2).toString();
            case "-":
              return (num1 - num2).toString();
            case "*":
              return (num1 * num2).toString();
            case "/":
              return num2 === 0 ? "Error" : (num1 / num2).toString();
            default:
              return "Invalid";
          }
        }
        
        // Main button handler
        function buttonPressed(buttonTitle) {
          if ("0123456789".includes(buttonTitle)) {
            if (operator === "") {
              firstNumber += buttonTitle;
            } else {
              secondNumber += buttonTitle;
            }
          } else if ("+-*/".includes(buttonTitle)) {
            if (firstNumber && secondNumber && operator) {
              firstNumber = calculate(firstNumber, secondNumber, operator);
              secondNumber = "";
            }
            operator = buttonTitle;
          } else if (buttonTitle === "=") {
            if (firstNumber && secondNumber && operator) {
              firstNumber = calculate(firstNumber, secondNumber, operator);
              secondNumber = "";
              operator = "";
            }
          } else if (buttonTitle === "C") {
            firstNumber = "";
            secondNumber = "";
            operator = "";
          }
          console.log(buttonTitle);
        
          updateDisplay();
        }
        
        
        buttons.forEach(button => {
          button.addEventListener("click", event => {
            const buttonText = event.target.innerText;
            buttonPressed(buttonText);
          });
        });
