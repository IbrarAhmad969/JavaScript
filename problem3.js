// Examples:

// n = 7       → 1
// n = 42      → 2
// n = 538     → 3
// n = 12345   → 5
// n = 1000    → 4

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Write a number: ", (number) => {
    let num = Number(number);
    let counter = 0;


    while (num != 0) {
        let digit = num % 10;
        counter++
        num = (num - digit) / 10;
    }

    console.log(counter);

    rl.close();
});