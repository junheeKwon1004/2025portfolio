import React from 'react';
import styles from '../styles/WeatherCard.module.scss';

interface ForecastItem {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
  pop: number;
}

interface WeatherData {
  city: {
    name: string;
  };
  list: ForecastItem[];
}

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const firstItem = data.list[0];

  if (!firstItem) {
    return <div className={styles.card}>날씨 정보를 불러오는 중입니다...</div>;
  }

  const temperatureC = Math.round((firstItem.main.temp - 273.15) * 10) / 10;
  const weather = firstItem.weather[0].main;
  const iconCode = firstItem.weather[0].icon;
  const weatherIconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const popPercent = Math.round(firstItem.pop * 100);

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{data.city.name}</h2>
      <div className={styles.imagePlaceholder}>
        <img src={weatherIconUrl} alt={weather} className={styles.weatherImg} />
        <p>{weather}</p>
      </div>
      <div className={styles.detail}>
        <div className={styles.temperature}>
          🌡 온도 <span>{temperatureC}℃</span>
        </div>
        <div className={styles.precipitation}>
          💧 강수확률 <span>{popPercent}%</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
