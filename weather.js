import 'dotenv/config' 

const getWeatherData = async (city) => {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(`https://open-weather13.p.rapidapi.com/city/${city}/EN`, options);
    const data = await response.json();
	console.log(data)
    return data;
  } catch (error) {
    console.error(error);
  }
};

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  const data = await getWeatherData(city);
  showWeatherData(data);
};

const showWeatherData = (weatherData) => {
  if (weatherData && weatherData.main) {
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById('temp').innerText = `${weatherData.main.temp}°C`;
    document.getElementById('min-temp').innerText = `${weatherData.main.temp_min}°C`;
    document.getElementById('max-temp').innerText = `${weatherData.main.temp_max}°C`;
    document.getElementById('weather-type').innerText = weatherData.weather[0].description;
  } else {
    console.error('Invalid weather data');
  }
};


