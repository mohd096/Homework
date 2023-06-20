axios({
    method: 'get',
    url: 'https://api.unsplash.com/photos/random?client_id=At67ZSimYbs9jy5kv0ycqprRWW9ackX-qOGxthtjNvQ'
})
.then(response => {
    console.log(response)
    console.log(response.data.urls.full)



    $('body').append(`<p class="image"><img src='${response.data.urls.full}'></p>`);


})


.catch(error => {
    console.log(error)
})

axios({
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=manama&units=metric&appid=2d0d427f7e61ab16def063d85ba4b69d'
})

.then(response => {
    console.log(response)
    console.log(response.data.weather[0].main)
    console.log(response.data.main.temp)
    console.log(response.data.name)

    const icons = {
        clear: '☀',
        rain: '️🌧',
        storm: '⛈',
        snow: '🌨',
        mist: '🌫',
        clouds: '☁',
      };


    $('body').append(`<p class="weather">${icons[response.data.weather[0].main.toLowerCase()]} ${response.data.weather[0].main}</p>`);
    $('body').append(`<p class="temperature">${response.data.main.temp}</p>`);
    $('body').append(`<p class="city">${response.data.name}</p>`);



})


.catch(error => {
    console.log(error)
})
axios({
    method: 'get',
    url: 'https://api.quotable.io/random'
})
.then(response => {
    console.log(response)
    console.log(response.data.content)
    console.log(response.data.author)

    $('body').append(`<h2 class="quot">'${response.data.content}'</h2>`)
    $('body').append(`<p class="auth">'${response.data.author}'</p>`)

})

.catch(error => {
    console.log(error)
})

console.log(moment().format('LTS'))
$('body').append(`<h1 class="time">${moment().format('LTS')}</h1>`)


// const options = {
//   method: 'GET',
//   url: 'https://quotes15.p.rapidapi.com/quotes/random/',
//   params: {
//     language_code: 'en'
//   },
//   headers: {
//     'X-RapidAPI-Key': '845dd5a187msh09d40a5757af55bp114805jsnab1a87c8e16b',
//     'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
//   }
// };

// try {
// 	const response =  axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }