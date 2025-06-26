import React from 'react';
import styles from '../styles/LocationButton.module.scss';
import axios from 'axios';
import type { WeatherData } from '../types'; // ✅ 여기서만 타입 import

interface LocationButtonProps {
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
}

const LocationButton: React.FC<LocationButtonProps> = ({ setWeatherData }) => {
  const API_KEY = '1a7a4e1983a53dce1f69074ce36465c0';

  const fetchWeatherByLocation = () => {
    if (!navigator.geolocation) {
      alert('이 브라우저는 위치 정보 사용을 지원하지 않습니다.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
          const response = await axios.get<WeatherData>(url);
          setWeatherData(response.data);
        } catch (err) {
          alert('위치 기반 날씨 정보를 불러오지 못했습니다.');
        }
      },
      () => {
        alert('위치 정보를 가져오는 데 실패했습니다.');
      }
    );
  };

  return (
    <button className={styles.locationBtn} onClick={fetchWeatherByLocation}>
      현재 내 위치 날씨보기
    </button>
  );
};

export default LocationButton;
