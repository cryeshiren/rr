import { FETCH_MOVIE } from '../constants/ActionTypes';
import { MOVIE_URL } from '../constants/index';
import axios from 'axios';
import { MovieModel } from '../models/MovieModel'

interface FetchMovie {
    type: FETCH_MOVIE;
    movies: Array<MovieModel>;
}

function fetchMovie(movies: Array<MovieModel>) : FetchMovie {
    return {
        type: FETCH_MOVIE,
        movies: movies
    };
}

export function getMovieData(city: string) {
    const url = `${MOVIE_URL}&city=${city}`;
    return axios.get(url);
}

export function fetch(city: string) {
    return dispatch => {
        return getMovieData(city)
        .then(response => response.data)
        .then(data => dispatch(fetchMovie(data)))
        }
}