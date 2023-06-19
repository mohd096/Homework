// axios({
//     method: 'get',
//     url: 'https://api.unsplash.com/photos/random?client_id=At67ZSimYbs9jy5kv0ycqprRWW9ackX-qOGxthtjNvQ'
// })
// .then(response => {
//     console.log(response)
//     console.log(response.data.urls.full)



//     $('body').append(`<p> <img src='${response.data.urls.full}'</p>`)


// })


// .catch(error => {
//     console.log(error)
// })

// axios({
//     method: 'get',
//     url: 'http://api.openweathermap.org/data/2.5/weather?q=manama&units=metric&appid=2d0d427f7e61ab16def063d85ba4b69d'
// })
// .then(response => {
//     console.log(response)
//     console.log(response.data.weather[0].main)
//     console.log(response.data.main.temp)
//     console.log(response.data.name)



//     $('body').append(`${response.data.weather[0].main}`)
//     $('body').append(`${response.data.main.temp}`)
//     $('body').append(`${response.data.name}`)


// })


// .catch(error => {
//     console.log(error)
// })
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://quotes15.p.rapidapi.com/quotes/random/',
  params: {
    language_code: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '845dd5a187msh09d40a5757af55bp114805jsnab1a87c8e16b',
    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}