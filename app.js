var backgrounds = ['https://static.pexels.com/photos/110874/pexels-photo-110874-large.jpeg',
                   'https://static.pexels.com/photos/3768/sky-sunny-clouds-cloudy-large.jpg',
                   'https://static.pexels.com/photos/24475/pexels-photo-24475-large.jpg',
                   'https://static.pexels.com/photos/7865/sunset-wind-wind-farm-clean-energy-large.jpg'] ,
    backgroundsName = ['rainy','sunny','snowy','windy'],
    icon = ['https://image.freepik.com/free-icon/rain-black-cloud-with-raindrops-falling-down_318-56422.jpg',
            'https://image.freepik.com/free-icon/sun-and-cloud_318-79049.jpg',
            'https://image.freepik.com/free-icon/snowflake-winter-shape_318-27531.jpg',
            'https://image.freepik.com/free-icon/wind_318-71838.jpg'] , 
    city = document.getElementById('city') ,
    weather = document.getElementById('weather') ,
    request = new XMLHttpRequest() ;

weather.click(function(){
  $.getJSON('http://freegeoip.net/json/?callback=?' , function(data){
    console.log('data')
  });
})
city.addEventListener('click' ,  function(){
  request.open("GET" , 'http://freegeoip.net/json/?callback=?' , true) ;
  request.onreadystatechange = function(){
    city.innerHTML = "hihi"
    }
} )

