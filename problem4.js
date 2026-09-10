// Reverse a digit 



// Examples:    
// 845 -> 548 
// 100 -> 1 
// 220 -> 22



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Write a number: ", (number) => {
    let num = Number(number);
    let reverseNumber=0;



    while (num != 0) {
        let digit = num % 10; //838 -> 8 
        reverseNumber = (reverseNumber * 10 ) + digit
        num = (num - digit) / 10;
    }
    console.log(reverseNumber)

    rl.close();
});