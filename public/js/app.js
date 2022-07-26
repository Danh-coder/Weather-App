console.log('Client side javascript file is loaded');

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then(({error, location, forecast}) => {
            if (error) {
                messageOne.textContent = 'Error: ' + error
                messageTwo.textContent = ''
            }
            else {
                messageOne.textContent = 'Location: ' + location
                messageTwo.textContent = 'Forecast: ' + forecast
            }
        })
    })
})