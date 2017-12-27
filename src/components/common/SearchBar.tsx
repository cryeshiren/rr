import * as React from 'react';
import { TextField, Button } from 'material-ui';

export interface SearchBarProps {
    label?: string;
    onSearch: (text: string) => void;
}

export interface SearchBarState {
    text: string;
}

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    constructor(props: SearchBarProps) {
        super(props);
        this.state = { text: '' };
    }

    handleOnChange(event) {
        event.preventDefault();
        this.setState({text: event.target.value});
    }

    handleOnClick(event) {
        event.preventDefault();
        this.props.onSearch(this.state.text.trim());
        //this.setState({ text: '' });
    }

    render() {
        return (
            <div>
                <TextField 
                    id="search" 
                    label={this.props.label} 
                    type="search" 
                    margin="normal"
                    onChange={(event) => this.handleOnChange(event)}
                />
                <Button 
                    raised={true}
                    type="submit"
                    onClick={(event) => this.handleOnClick(event)}
                >
                    Search
                </Button>
            </div>
        );
    }
}
