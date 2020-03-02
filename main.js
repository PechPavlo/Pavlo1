"use strict";

// class_work 02.03.20

let monthNum = 5

switch (monthNum) {
    case 1:
        console.log ("month 1")
        break;
        case 2:
            console.log ("month 2")
            break;
            case 3:
                console.log ("month 3")
            break;
            case 4:
                console.log ("month 4")
            break;
            case 5:
                console.log ("month 5")
            break;
            case 6:
                console.log ("month 6")
            break;
            case 7:
                console.log ("month 7")
            break;
            case 8:
                console.log ("month 8")
            break;
            case 9:
                console.log ("month 9")
            break;
            case 10:
                console.log ("month 10")
            break;
            case 11:
                console.log ("month 11")
            break;
            case 12:
                console.log ("month 12")
            break;
    default:
        break;
}

let num1 = 0

for (; num1 < 100; num1++) {
    if (num1%3==0 && num1%5==0) {
        console.log("FizzBuzz ")
    };
    if (num1%3==0 && num1%5>0) {
        console.log("Fizz")
    };
    if (num1%3>0 && num1%5==0) {
        console.log("Buzz")
    };
    
}

let smile = ":)"
let emptString =" "
for (let num2 = 1; num2 < 5; num2++) {
    console.log(smile + emptString );
    
}