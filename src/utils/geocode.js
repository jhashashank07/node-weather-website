const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hhc2hhbmtqaGEiLCJhIjoiY2s5dTBzdGd2MDM3djNsbzU4bGVwMXUxdiJ9.FMTtZBCGee_D_SjbLoyAtw&limit=1'
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect tpo location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location.Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode