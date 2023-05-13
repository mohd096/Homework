const numberOne = parseFloat( prompt('What Is Your First Number?'));
const operator = prompt("Enter An Operator: +, -, /, *");
const numberTwo = parseFloat( prompt("What Is Your Secound Number? "));

let answer;

if (operator == '+') {
    answer = numberOne + numberTwo;

}   else if (operator == '-') {
    answer = numberOne - numberTwo;

}   else if (operator == '*') {
    answer = numberOne * numberTwo;

}   else if (operator == '/') {
    answer = numberOne / numberTwo;

}
alert(answer)
