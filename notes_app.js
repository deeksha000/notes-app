const chalk = require('chalk')
const { strict } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

/*const command = process.argv[2]
console.log(process.argv)
console.log(yargs.argv)

if(command ==='add')
{
    console.log("Adding note")
}
else if(command === 'remove')
{
    console.log("Deleting note")
}*/


//create add command
yargs.command({
    command : 'add',
    describe:'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'body of the note',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv)
{
    //console.log('adding a new note',argv)
    //console.log('Title: '+argv.title)
    //console.log('Body: ' +argv.body)
    notes.addNotes(argv.title,argv.body)

}})
yargs.command({
    command : 'remove',
    describe:'remove a note',
    builder:{
        title:{
            demandOption : true,
            describe : "note title",
            type : 'string'
        }
    },
    handler(argv)
{
    //console.log('removing a note')
    notes.removeNotes(argv.title)
}})


yargs.command({
    command : 'list',
    describe:'describing the notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'reading the notes',
    builder:{
        title:{
            demandOption : true,
            describe : "note title",
            type : 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
//console.log(yargs.argv)
//instead of yargs.argv we can parse the yargs using yargs.parse()

yargs.parse()