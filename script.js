  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=17fd9562a3e4c868a8c0fe91c54bd5ed', {
  method: 'GET',
  credentials: 'same-origin', 
  redirect: 'follow',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
