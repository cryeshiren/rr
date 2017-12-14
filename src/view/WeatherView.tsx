import * as React from 'react';

import SearchBar from '../container/SearchBar';
import WeatherList from '../container/WeatherList';

export class WeatherView extends React.Component<any,any> {
    render() {
        return (
            <div>
                <SearchBar/>
                <WeatherList/>
            </div>
        );
    }
}