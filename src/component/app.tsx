/**
 * Created by www.wuleba.com on 2016/9/26.
 */

import * as React from 'react';

import SearchBar from '../container/SearchBar';
import WeatherList from '../container/WeatherList';

export class App extends React.Component<any,any> {
    render() {
        return (
            <div>
                <SearchBar/>
                <WeatherList/>
            </div>
        );
    }
}