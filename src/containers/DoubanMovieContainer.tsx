import * as React from 'react';
import { connect } from 'react-redux'
import SearchBar from "../components/common/SearchBar";
import MovieGridList from "../components/DoubanMovie/MovieGridList";
import { getMovieData } from "../actions/DoubanMovieAction";
import { MovieModel, Rating, Actor, Director } from "../models/MovieModel";

interface DoubanMovieContainerState {
  movies: Array<MovieModel>
}

export default class DoubanMovieContainer extends React.Component<any, DoubanMovieContainerState> {
  constructor(props) {
    super(props);
    this.state = {movies: []};
  }

  render() {
    return (
      <div>
        <SearchBar label="请输入需要查看的城市" onSearch={ text => this.search(text) }/>
        <MovieGridList movies={this.state.movies}/>
      </div>
    );
  }

  search(city: string) {
    return getMovieData(city)
    .then(response => response.data)
    .then(movies => {
      let result = movies.map(movie => {
        let m = new MovieModel();
        m = {...movie};
        return m;
      });
      console.log('====================================');
      console.log(result);
      console.log('====================================');
      this.setState({movies: result});
    });
  }
}