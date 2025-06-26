import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.scss';
import axios from 'axios';
import type { WeatherData } from '../types'; // ✅ 여기서만 타입 import

interface SearchBarProps {
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setWeatherData }) => {
  const [location, setLocation] = useState('');
  const API_KEY = '1a7a4e1983a53dce1f69074ce36465c0';

  const searchWeather = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && location.trim()) {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`;
        const { data } = await axios.get<WeatherData>(url);
        setWeatherData(data);
      } catch (err) {
        alert('날씨 데이터를 가져오는 데 실패했습니다.');
      }
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="도시를 입력하세요"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={searchWeather}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;
