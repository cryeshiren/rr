import * as React from 'react';
import { MovieModel } from '../../models/MovieModel';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';

export interface MovieGridListProps {
    movies: Array<MovieModel>
}

export default class MovieGridList extends React.Component<MovieGridListProps, any> {
  render() {
    return (
      <div>
        <GridList>
          {this.props.movies.map((movie, index) => {
            <GridListTile key={index}>
              <img src={movie.image}/>
              <GridListTileBar
                title={movie.title}
                subtitle={<span>导演：{movie.director.name}</span>}
              />
            </GridListTile>
          })}
        </GridList>        
      </div>
    );
  }
}
