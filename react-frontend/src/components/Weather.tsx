import React, { useState, useEffect } from "react";

import '../css/Weather.css'

interface WeatherInformation {
    date : string
    summary : string
    temperatureC : number
}

function Weather() {
    const [weatherData, setWeatherData] = useState<WeatherInformation[]>([]);
    
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:5086/api/WeatherForecast');
            const weatherResults = await response.json();
        setWeatherData(weatherResults);
    };
    getData(); 

    }, []);

    return (
        <>
            <h1 className="weather-h1">Weather</h1>
                <table className="weather-table">
                    <thead>
                        <tr>
                            <th className="weather-th">Date</th>
                            <th className="weather-th">Temperature</th>
                            <th className="weather-th">Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weatherData.map(p => 
                        <>
                            <tr>
                                <td className="weather-td">{p.date}</td>
                                <td className="weather-td">{p.temperatureC}</td>
                                <td className="weather-td">{p.summary}</td>
                            </tr>
                        </>
                        )}
                    </tbody>
                </table>
        </>
    )
}

export default Weather;