import * as React from 'react';
import SearchBar from '../components/common/SearchBar';
import { fetchWeather } from '../actions/WeatherAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WeatherList from '../components/Weather/WeatherList';

interface WeatherState {
    weathers: Array<any>
}

export class WeatherContainer extends React.Component<any, WeatherState> {
    constructor(props) {
        super(props);
        this.state = { weathers: [] };
    }

    render() {
        const { disptach, weathers } = this.props;
        return (
        <div>
            <SearchBar onSearch={text => this.props.dispatch(fetchWeather(text))} label='Please enter city name'/>
            <WeatherList weathers={weathers}/>
        </div>
        );
  }
}

function mapStateToProps(state) {
    return ({weathers: state.weathers});
}

export default connect(mapStateToProps)(WeatherContainer);
