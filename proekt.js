let input = document.querySelector('.input');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let button= document.querySelector('.button');

button.addEventListener('click',weatherfunc=()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=1cd5ee181cf951172c879b02f7af521b')
.then(response => response.json())
.then(data => {
  let tempValue= data['main']['temp'];
  let descValue= data['weather'][0]['description'];
  let feelslikeValue= data['main']['feels_like'];
  desc.innerHTML= descValue;
  temp.innerHTML= "Temperature:" +tempValue+"K Feels like:"+ feelslikeValue+'K';
})
.catch(error => alert("Wrong city name!!!"));
}) 

