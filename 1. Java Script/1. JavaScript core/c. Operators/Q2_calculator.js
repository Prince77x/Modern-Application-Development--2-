// Using switch + arithmetic operators
function calc(a, b, operator) {
// +, -, *, /
switch (operator){
    case "/":
        return a / b;
        break; // break after return is useless because after return function already exit 
    case "+":
        return a + b;
        break;
    case "-":
        return a - b;
        break;
    case "*":
        return a*b
        break;
    default:
        console.log("unknown")
    }
  
}

let int =calc(3,2,"*")
console.log(int)