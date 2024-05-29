
let temp=document.getElementById('temp');
let humidity=document.getElementById('humidity');
let windspeed=document.getElementById('windspeed');
let cityinfo=document.getElementById('cityinfo');
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

    async function weather() {
        let weather = await getweather();
    let temp_=weather.main.temp-273.15;
    temp.textContent=temp_.toFixed(2)+"°C";
    humidity.textContent=weather.main.humidity;
    windspeed.textContent=weather.wind.speed;
    cityinfo.textContent=weather.name;
}
document.getElementById('searchpicdiv').addEventListener('click', weather);
