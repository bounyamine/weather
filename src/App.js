import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [city, setCity] = useState('Paris');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (city === '') return;

    setIsLoading(true);
    const url = `https://cweather.vercel.app/${city}`;

    fetch(url)
      .then(response => response.json())
      .then((json) => {
        if (json.cod === '404') {
          setError(true);
          setWeather(null);
        } else {
          setError(false);
          setWeather(json);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  };

  return (
    <div className="container" style={{ height: weather || error ? '590px' : '150px' }}>
      <div className="search-box">
        <i className="fa-solid fa-location-dot"></i>
        <input
          type="text"
          placeholder="Enter your location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="fa-solid fa-magnifying-glass" onClick={handleSearch}></button>
      </div>

      {isLoading && (
        <div className="loader"></div>
      )}

      {error && !isLoading && (
        <div className="not-found fadeIn">
          <img src="images/404.png" alt="Not Found" />
          <p>Oops! Invalid location :/</p>
        </div>
      )}

      {weather && !isLoading && (
        <>
          <div className="weather-box fadeIn">
            <img
              src={`https:${weather.meteo.icone}`}
              alt={weather.meteo.principal}
            />
            <p className="temperature">{parseInt(weather.actuel.temp_c)}<span>°C</span></p>
            <p className="description">{weather.meteo.principal}</p>
          </div>

          <div className="location-country">
            <p>{city}, {weather.lieu.pays}</p>
          </div>

          <div className="weather-details fadeIn">
            <div className="humidity">
              <i className="fa-solid fa-water"></i>
              <div className="text">
                <span>{weather.actuel.humidite}%</span>
                <p>Humidity</p>
              </div>
            </div>
            <div className="wind">
              <i className="fa-solid fa-wind"></i>
              <div className="text">
                <span>{parseInt(weather.actuel.vitesse_vent_kph)} Km/h</span>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
