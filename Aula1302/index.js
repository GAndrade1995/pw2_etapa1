const chalk = require("chalk")
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("Qual sua linguagem de programação favorita: ", (linguagem)=>{
    console.log(chalk.green("Sua linguagem favorita é: ")+linguagem)
    readline.close()
})    