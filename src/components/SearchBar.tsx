import * as React from 'react';
import { TextField, Button } from "material-ui";

export interface SearchBarProps {
    label?: string;
    onSave: (text: string) => void
}

export default class SearchBar extends React.Component<SearchBarProps, any> {
  render() {
    return (
        <div>
            <TextField id="search" label={this.props.label} type="search" margin="normal"/>
            <Button raised type="submit">Search</Button>
        </div>
    );
  }
}
