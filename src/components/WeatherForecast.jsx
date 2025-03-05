const WeatherForecastsItem = ({ weatherForecast }) => {
    return (
        <div className="weather">
        <h2>{weatherForecast.day}</h2>
        <img src={weatherForecast.img} alt={weatherForecast.imgAlt} />
        <p><span>conditions: </span><span>{weatherForecast.conditions}</span></p>
        <p><span>time: </span><span>{weatherForecast.time}</span></p>
        </div>
    );
};
export default WeatherForecastsItem;
