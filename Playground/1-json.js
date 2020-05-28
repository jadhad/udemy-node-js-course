const fs = require('fs')

// const book = {
//     title: 'book1',
//     author: 'author1'
// }
//
// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)

data.name = "yohad"
data.age = "44"

const modifiedDataJson = JSON.stringify(data)
fs.writeFileSync('1-json.json', modifiedDataJson)
