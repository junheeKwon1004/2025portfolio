// src/types.ts

export interface ForecastItem {
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

export interface WeatherData {
  city: {
    name: string;
  };
  list: ForecastItem[];
}
