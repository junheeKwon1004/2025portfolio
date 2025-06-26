import { useState, useEffect } from 'react';
import './styles/PhoneFrame.scss';
import axios from 'axios';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeeklyForecast from './components/WeeklyForecast';
import LocationButton from './components/LocationButton';

import type { WeatherData } from './types'; // ✅ types.ts에서 타입만 import

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const API_KEY = '1a7a4e1983a53dce1f69074ce36465c0';

  useEffect(() => {
    const fetchSeoulWeather = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=seoul&appid=${API_KEY}`;
        const { data } = await axios.get<WeatherData>(url);
        setWeatherData(data);
      } catch (err) {
        console.error('서울 날씨 불러오기 실패:', err);
      }
    };

    fetchSeoulWeather();
  }, []);

  return (
    <div className="phone-frame">
      <div className={`weather_wrap ${darkMode ? 'dark' : 'light'}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <SearchBar setWeatherData={setWeatherData} />
        {weatherData && (
          <>
            <WeatherCard data={weatherData} />
            <WeeklyForecast data={weatherData} />
          </>
        )}
        <LocationButton setWeatherData={setWeatherData} />
      </div>
    </div>
  );
}

export default App;
