const fs = require('fs')
const chalk = require('chalk')

const get_notes = () =>{
    return "your notes..."
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find( (note) => note.title === title)
    if(note)
    {
        console.log(chalk.bgMagentaBright(note.body))
    }
    else {
        console.log(chalk.red("not found"))
    }
}
debugger
const addNote = (title,body)=>{
    const notes = loadNotes()
    //const duplicateNotes = notes.filter( (note) => note.title === title)
    const duplicateNote = notes.find( (note) => note.title === title)

    //console.log(duplicateNotes)
    //console.log(duplicateNotes.length)
    //if(duplicateNotes.length === 0){
        if(!duplicateNote){
    notes.push({
        title : title,
        body : body
    })
    saveNotes(notes)
    console.log(chalk.blue.inverse("new note added"))

    }
    else{
        console.log("title taken")
    }
}

const saveNotes = (notes) => {
        const dataJson = JSON.stringify(notes)
        fs.writeFileSync('notes.json',dataJson)
}

const loadNotes = () => {
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
    }
    catch(e){
        return []
    }
}



const removeNotes = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    //console.log(notes.length,notesToKeep.length)
    if(notes.length > notesToKeep.length)
    {
        console.log(chalk.green.inverse("note removed"))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse("note not removed"))
    }
}

const listNotes = () => {
    const notes = loadNotes()
     console.log(chalk.inverse('your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

module.exports = {
    getNotes:get_notes,
    addNotes : addNote,
    removeNotes : removeNotes,
    listNotes: listNotes,
    readNote : readNote}