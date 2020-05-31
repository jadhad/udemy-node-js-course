const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=5a4c94a7c6d59fc96080de3893f8b929&query=45,-75'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An Error ', error)
})

request.end()