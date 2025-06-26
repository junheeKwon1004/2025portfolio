import React from 'react';
import styles from '../styles/WeeklyForecast.module.scss';

interface ForecastItem {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
}

interface WeatherData {
  list: ForecastItem[];
}

interface WeeklyForecastProps {
  data: WeatherData;
}

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ data }) => {
  // 하루 대표값으로 1개씩 추출 (00:00:00 기준)
  const dailyForecasts: ForecastItem[] = [];
  const seenDates = new Set();

  for (const item of data.list) {
    const date = item.dt_txt.split(' ')[0]; // '2025-06-26'
    if (!seenDates.has(date)) {
      dailyForecasts.push(item);
      seenDates.add(date);
    }
    if (dailyForecasts.length >= 3) break;
  }

  const getDayName = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ko-KR', { weekday: 'long' });
  };

  return (
    <div className={styles.weekly}>
      <h3>이번주 날씨</h3>
      <div className={styles.cards}>
        {dailyForecasts.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].main}
              />
            </div>
            <div className={styles.txt}>{getDayName(item.dt_txt)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecast;
