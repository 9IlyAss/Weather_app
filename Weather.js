
let temp=document.getElementById('temp');
let humidity=document.getElementById('humidity');
let windspeed=document.getElementById('windspeed');
let cityinfo=document.getElementById('cityinfo');
let pic=document.getElementById('statuspic');

async function getweather()
    {
        let cityname=document.getElementById('city').value;
        let apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=c6f0f387e3853286ef921ac24c42f913`;
        let result=await fetch(apiurl);
        if(!result.ok)
            {
                alert("can't fetch the result");
                return null;
            }
        let data=await result.json();
        return data;
    } 

async function weather() 
    {
        let weather = await getweather();
        let temp_=weather.main.temp-273.15;

        temp.textContent=temp_.toFixed(2)+"°C";
        humidity.textContent=weather.main.humidity+"%";
        windspeed.textContent=weather.wind.speed+" M/S";
        cityinfo.textContent=weather.name;

        let weathercondition=weather.weather[0].main;
            if (weathercondition === "Clouds") {
                newpic = 'images/clouds.png';
            } else if (weathercondition === "Drizzle") {
                newpic = 'images/drizzle.png';
            } else if (weathercondition === "Mist") {
                newpic = 'images/mist.png';
            } else if (weathercondition === "Snow") {
                newpic = 'images/snow.png';
            }else if (weathercondition === "Rain") {
                newpic = 'images/rain.png';
            } else {
                newpic = 'images/clear.png';
            }
            pic.src = newpic;
    }
document.getElementById('searchpicdiv').addEventListener('click', weather);
