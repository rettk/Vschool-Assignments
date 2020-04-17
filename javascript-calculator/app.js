var readlineSync = require('readline-sync');
    var num1 = parseInt(readlineSync.question("What is your first number?"));
    var num2 = parseInt(readlineSync.question("What is your second number?"));
    var mathFunctions = ['add','sub','mul','div']
var mathChoice = readlineSync.keyInSelect(mathFunctions,"Please select the operation to perform");

if (mathFunctions[mathChoice] === "add") {
        answer = num1 + num2;
    }
    else if (mathFunctions[mathChoice] === "sub") {
        answer = num1 - num2;
    }
    else if (mathFunctions[mathChoice] === "mul"){
        answer = num1 * num2;
    }
    else if (mathFunctions[mathChoice] === "div"){
        answer = num1/num2;
    }
console.log(mathChoice)
console.log(answer)

