import "./Card.css";

export default function Weather({ city, temperature, condition }) {
  return (
    <div className="card weather-card">
      <h2>🌤 Weather</h2>
      <h3>{city}</h3>
      <p className="temp">{temperature}°C</p>
      <p className="condition">{condition}</p>
    </div>
  );
}