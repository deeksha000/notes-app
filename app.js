//const fs = require('fs')
//fs.writeFileSync('notes.txt','This file was created by nodejs\n')
//fs.appendFileSync('notes.txt','Piku is a good dog')

// const add = require('./utils.js')
// const sum = add(9,3)
// console.log(sum)


const note = require('./notes.js')
const notes = note()
console.log(notes)

const validator = require('validator')
console.log(validator.isEmail('piku@gmail.com'))
console.log(validator.isEmail('piku'))
console.log(validator.isURL('https://piku.io'))
console.log(validator.isURL('pikuis a good doggo'))

const chalk = require('chalk')
console.log(chalk.bold.italic.bgBlue("success"))

console.log(process.argv[2])