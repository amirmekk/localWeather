'use strict';
//didn't use document onload  because u need the script to set everything from the temprature to background ...etcxx
const backgrounds = ['https://static.pexels.com/photos/110874/pexels-photo-110874-large.jpeg',
                   'https://static.pexels.com/photos/3768/sky-sunny-clouds-cloudy-large.jpg',
                   'https://static.pexels.com/photos/24475/pexels-photo-24475-large.jpg',
                   'https://static.pexels.com/photos/7865/sunset-wind-wind-farm-clean-energy-large.jpg'] ,
    backgroundsName = ['rainy','sunny','snowy','windy'],
    city = document.getElementById('city'),
    temp = document.getElementById('temp') ,
    button = document.getElementById('digree') ,
    description = document.getElementById('description'),
    digreeSymbol = document.getElementById('digreeSymbol');

  $.getJSON('http://freegeoip.net/json/?callback=?' , function(data){ 
      // getting user position I did not html5 geolocation because if u r on chrome you must have an https connection to use it
      var position = data , latitude = position.latitude , longitude = position.longitude;
      $.getJSON('http://api.openweathermap.org/data/2.5/weather?APPID=318269c767201abe051535fdaa125266&lat='+ latitude + '&lon=' + longitude+'&units=metric',
      // sending the retrieved position to open weather service to get the actuel weather 
                function(weatherdata){
          const stringifiedData = JSON.stringify(weatherdata) ,
              parsedData = JSON.parse(stringifiedData) ,
          // making the retrived JSON file usable by stringifing then parsing the file
              iconURL = "http://openweathermap.org/img/w/"+ parsedData.weather[0].icon +".png";
          /// the open weather map offer pack of icons available according to the weather so I just used it instead
          temp.innerHTML = parsedData.main.temp + ' Cº' ;
          city.innerHTML = parsedData.name +' , '+parsedData.sys.country ;
          description.innerHTML = parsedData.weather[0].description ;
          $('#icon').attr({'src' : iconURL ,'alt' : parsedData.weather[0].description ,
                           'title' :parsedData.weather[0].description  });
          //setting the background image of the DIV according to the weather 
          if(parsedData.weather[0].description === 'light rain' || parsedData.weather[0].description === 'rain' || parsedData.weather[0].description === 'thunderstorm' ){
            $('#all').css('background-image', `url(" ${backgrounds[0]}")`)}
            else if(parsedData.weather[0].description === 'clear sky' || parsedData.weather[0].description === 'few clouds'){
              $('#all').css('background-image', `url(" ${backgrounds[1]}")`)
            }
          else if(parsedData.weather[0].description === 'snow'){
              $('#all').css('background-image', `url(" ${backgrounds[2]}")`)
            }
          else if(parsedData.weather[0].description === 'scattered clouds' || parsedData.weather[0].description === 'broken clouds'){
              $('#all').css('background-image', `url(" ${backgrounds[3]}")`)
            }
          // this is for converting from Celsius to Fahrenheit and the other way around
          button.addEventListener('click' , () => {
          if(button.innerHTML === 'Fº'){
            temp.innerHTML = Math.round(parsedData.main.temp * 1.8 + 32) + ' Fº'  ;
            button.innerHTML = 'Cº' ;
            digreeSymbol.innerHTML = 'Cº' ;
          }else {
            temp.innerHTML = parsedData.main.temp + ' Cº'   ;
            button.innerHTML = 'Fº' ;
            digreeSymbol.innerHTML = 'Cº' ;
          }
          })
          
      })
  });
