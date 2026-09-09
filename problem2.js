
// find sum of 538. 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Write a number: ", (number) => {
    let num = Number(number);
    let sumOfNumbers = 0;

    while (num != 0) {
        let digit = num % 10;

        sumOfNumbers = sumOfNumbers + digit;

        num = (num - digit) / 10;
    }

    console.log(sumOfNumbers);

    rl.close();
});
