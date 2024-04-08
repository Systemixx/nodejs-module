const chalk = require('chalk');

function sum(x, y) {
    const sumResult = x + y;
    console.log(chalk.green(`Die Summe von Zahlen ${x} und ${y} ist ${sumResult}.`));
    return sumResult; 
}

module.exports = sum;
