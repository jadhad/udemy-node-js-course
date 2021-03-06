const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => title === note.title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => title !== note.title)

    if (notesToKeep.length < notes.length) {
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse("No note found!"))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.blueBright.inverse("Your notes:"))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const foundNote = notes.find((note) => title === note.title)

    if (foundNote) {
        console.log(chalk.bgCyan.inverse("Note title: " + foundNote.title))
        console.log("Note body: " + foundNote.body)
    } else {
        console.log(chalk.red.inverse("Note not found"))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}