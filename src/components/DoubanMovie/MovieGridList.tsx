import * as React from 'react';
import { MovieModel } from '../../models/MovieModel';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';

export interface MovieGridListProps {
    movies: Array<MovieModel>;
    cols: number;
    cellHeight: number;
    imageHeight: number;
    imageWidth: number;
}

export default class MovieGridList extends React.Component<MovieGridListProps, any> {
    render() {
        return (
            <div >
                <GridList cols={this.props.cols} cellHeight={this.props.cellHeight}>
                    {this.props.movies.map(movie => (
                        <GridListTile key={movie.image}>
                        <img src={movie.image} alt={movie.title} width={this.props.imageWidth} height={this.props.imageHeight}/>
                        <GridListTileBar
                            title={movie.title}
                            subtitle={<span>by: {movie.director.name}</span>}
                        />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}
