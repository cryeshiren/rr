import * as React from 'react';
import { connect } from 'react-redux'
import SearchBar from "../components/common/SearchBar";
import { getMovieData } from "../actions/DoubanMovieAction";
import { MovieModel, Rating, Actor, Director } from "../models/MovieModel";

interface DoubanMovieContainerState {
  movies: Array<MovieModel>
}
class DoubanMovieContainer extends React.Component<any, DoubanMovieContainerState> {
  render() {
    return (
      <div>
        <SearchBar label="请输入需要查看的城市" onSearch={ text => this.search(text) }/>
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