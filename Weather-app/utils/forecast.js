const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5a4c94a7c6d59fc96080de3893f8b929&query=' + latitude + ',' + longitude

    request({url, json: true}, (error, {body} = {}) => {
            if (error) {
                callback('unable to connect to weather service!', undefined)
            } else if (body.error) {
                callback('unable to find location', undefined)
            } else {
                callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
            }
        }
    )
}

module.exports = forecast