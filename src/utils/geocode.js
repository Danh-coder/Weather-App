const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGFuaGNvZGVyMTQiLCJhIjoiY2w0cjFxNXoyMHd5ajNqcjEwYTBleG00NSJ9.f42jhm_aJWnra-NzTdVQiQ&limit=1'

    request({url, json: true}, (error, {body: data} = {}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (data.features.length === 0) {
            callback('Unable to find location. Try another search.')
        } else {
            callback(undefined, {
                longtitude: data.features[0].center[0],
                latitude: data.features[0].center[1],
                location: data.features[0].place_name,
            })
        }
    })
}

module.exports = geocode