import * as React from 'react';
import { MovieModel } from '../../models/MovieModel';

export interface MovieGridListProps {
    movies: Array<MovieModel>
}

export default class MovieGridList extends React.Component<MovieGridListProps, any> {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
