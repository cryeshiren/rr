
export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

const API_KEY_WEATHER = 'c97ef90f910baef4d7bacbf2ed057137';
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY_WEATHER}`;

export const MAPBOX_TOKEN = 'pk.eyJ1IjoiY3J5ZXNoaXJlbiIsImEiOiJjajl6Y3Z5bWU4ZzYyMzNsZ3Juenhjb3c1In0.TK-S42T8bE2EVtfuCruR4A';

const API_KEY_MOVIE = '0b2bdeda43b5688921839c8ecb20399b';
export const MOVIE_URL = `https://api.douban.com/v2/movie/in_theaters?apikey=${API_KEY_MOVIE}`;