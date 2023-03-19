let num = Number(prompt("Enter a Number"));
let result = 0;

while (num > 0) {
    var calc = num % 10;
    num = (num - calc) / 10;
    result = (result*10) + calc;
}
document.write(result);