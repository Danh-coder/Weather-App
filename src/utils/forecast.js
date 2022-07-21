const request = require('request')

const forecast = (longtitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=c3b5ceb7d174193c9158e8827b692a35&query=${latitude},${longtitude}`

    request({ url, json: true }, (error, {body: data} = {}) => {
        if (error) {
            callback('Unable to connect to weather service');
        }
        else if (data.error) {
            callback('Unable to find location');
        }
        else {
            const {current} = data;
            callback(undefined, current.weather_descriptions[0] + '. It is currently ' + current.temperature + ' degress out. It feels like ' + current.feelslike + ' degress out. The UV index is ' + current.uv_index + '.');
        }
    })
}

module.exports = forecast