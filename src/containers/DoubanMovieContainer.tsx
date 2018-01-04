import * as React from 'react';
import { connect } from 'react-redux'
import SearchBar from "../components/common/SearchBar";
import MovieGridList from "../components/DoubanMovie/MovieGridList";
import { getMovieData } from "../actions/DoubanMovieAction";
import { MovieModel, Rating, Actor, Director } from "../models/MovieModel";

interface DoubanMovieContainerState {
  movies: Array<MovieModel>;
  city?: string;
}

export default class DoubanMovieContainer extends React.Component<any, DoubanMovieContainerState> {
  constructor(props) {
    super(props);
    this.state = {movies: [], city:""};
  }

  render() {
    return (
      <div style={{
        overflow: 'hidden',
        width: 1782,
        margin: '0 auto'
      }}>
        <SearchBar label="请输入需要查看的城市" onSearch={ text => this.search(text) }/>
        <MovieGridList movies={this.state.movies} cellHeight={297} imageHeight={297} imageWidth={212} cols={6}/>
      </div>
    );
  }

  async search(city: string) {
    await getMovieData(city)
    .then(response => response.data.subjects)
    .then(movies => {
      let result = movies.map(movie => {
        let m = new MovieModel();
        m.rating = new Rating(movie.rating.max, movie.rating.average, movie.rating.min);
        m.type = {...movie.genres};
        m.title = movie.title;
        m.director = new Director(movie.directors[0] && movie.directors[0].name);
        m.actors = movie.casts.map(c => {
          return new Actor(c.name, c.alt, c.avatars.medium);
        });
        m.durations = movie.durations[0];
        m.image = movie.images.medium;
        m.pubDate = movie.pubdates[0];
        return m;
      });
      this.setState({movies: result});
    });
  }
}
