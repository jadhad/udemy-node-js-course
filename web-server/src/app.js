const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup 'handlebars' engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'aaa'
    })
})

//provide a function for '/help' (not called since there is a help.html file that's loaded with express.static)
app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is a generic help message',
        title: 'Help',
        name: 'aaa'
    })
})

//provide a function for '/about'
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'aaa'
    })
})

// provide a function for '/weather'
app.get('/weather', (req, res) => {
    res.send({
        forecast: '',
        location: ''
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Help article not found',
        title: '404',
        name: 'aaa'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page not found',
        title: '404',
        name: 'aaa'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})