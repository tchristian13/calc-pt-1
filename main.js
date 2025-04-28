let firstNumber = "";
let secondNumber = "";
let operator = "";



const buttons = document.querySelectorAll(".button")
const display = document.getElementByID('display')

buttons.forEach(buttons => {
        buttons.addEventListener("click",(event) => {
                buttonPressed(event.target.InnerText)
                onclick =  buttonPressed(event.target.innerText)
                })
        })   

        numberButtons.forEach(button => {
                button.addEventListener('click', () => {
                  display.value += button.innerHTML;
        
                })
        })
        
function buttonPressed(buttonTitle) {
        (buttonTitle) => {
                "-";
                "+";        
                "*";
                "/"; { 
                        if (firstNumber.length > 0 && operator.length > 0 && secondNumber.length > 0) {
                                firstNumber = calculate(firstNumber, secondNumber, operator);
                                operator = buttonTitle;
                                display()
                        } else if (firstNumber.length > 0 && operator.length == 0) {
                                operator = buttonTitle;
                        } else if (firstNumber.length == 0) {
                                firstNumber = "0";
                                operator = buttonTitle;
                        } else if (secondNumber.length == 0) {
                                operator = buttonTitle;
                        } else {
                                return;  
                                
                        }

//  function calculate(num1, num2, operator) {
//         let result;
//         switch (operator) {
//                 case '+':
//                   result = num1 + num2;
//                   break;
//                 case '-':
//                   result = num1 - num2;
//                   break;
//                 case '*':
//                   result = num1 * num2;
//                   break;
//                 case '/':
//                   if (num2 === 0) {
//                     return "Cannot divide by zero";
//                   }
//                   result = num1 / num2;
//                   break;
//                 default:
//                   return "Invalid operator";
//               }
//               return result;
//             }
                                                            

                }

        }

        switch (buttonTitle) {

                case "+":
                case "-":
                case "*":
                case "/":

                        if (firstNumber.length > 0)
                                operator = buttonTitle;
                        display()
                        }
                        break;
        
                        
                case "0";
                case "1";
                case "2";
                case "3";
                case "4";     
                case "5";
                case "6";
                case "7";
                case "8";      
                case "9"; {
                        if (firstNumber.length > 0 && operator.length > 0) {
                                secondNumber += buttonTitle;
                                display()
                        } else {
                                firstNumber += buttonTitle;
                                display()
                        }
                }
                break;

                case "C"; {
                        firstNumber = "";
                        secondNumber = "";
                        operator = "";
                        display()
                break;                      
        }
    
    