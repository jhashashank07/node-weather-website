const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6da5ab9e8f778583bdb7b2f0b51e49ba&query=' + encodeURI(latitude) + ',' + encodeURI(longitude)
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.Try another location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out.It feels like ' + body.current.feelslike + ' degrees out.The humidity is ' + body.current.humidity + '% here.')
        }
    })
}

module.exports = forecast