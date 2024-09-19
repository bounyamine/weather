import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const ville = "lubumbashi"; // Nom de la ville
  const urlapi = `https://cweather.vercel.app/${ville}`;

  useEffect(() => {
    fetch(urlapi)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
        setError("Erreur lors de la récupération de la météo.");
      });
  }, [urlapi]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="contenair">
      <h1 className="pays">{data.lieu.pays}</h1>
      <h3 className="ville">• {data.lieu.nom}</h3>
      <div className="img">
        <img id="weatherImage" src={`https:${data.meteo.icone}`} alt="weather" />
      </div>
      <p className="temp">{`${data.actuel.temp_c} °C / ${data.actuel.temp_f} °F`}</p>
      <p className="meteo">{data.meteo.principal}</p>
      <div className="lat-lon">
        <p className="lat">Latitude : {data.lat}°</p>
        <p className="lon">Longitude : {data.lon}°</p>
      </div>
    </div>
  );
}

export default App;
