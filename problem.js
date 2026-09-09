const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Write a number: ", (number) => {
    const num = Number(number);
    let counter = 0;
    for (let input = 1; input <= num; input++) { // 1-2-3-4-5-6-7-8-9-10
        if (input % 2 === 0) { // coz the number is even here. 
            counter = counter + 1;
        }
    }
    console.log(counter)

    rl.close();
});