import * as React from 'react';
import Button from 'material-ui/Button';
import withStyles from 'material-ui/styles/withStyles';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import WeatherContainer from "./WeatherContainer";
import DoubanMovieContainer from "./DoubanMovieContainer";


export default class MainPageContainer extends React.Component<any, any> {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div>
          <Button raised color="accent" ><Link to="/weather">Weather</Link></Button>
          <Button raised color="accent" ><Link to="/douban">Douban movie</Link></Button>
          <Route path="/movie" component={DoubanMovieContainer}/>
          <Route path="/weather" component={WeatherContainer}/>
        </div>
      </Router>
    );
  }
}