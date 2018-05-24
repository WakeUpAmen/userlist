import React, {Component} from 'react';
class SearchBar extends Component {
  
    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    }
  
    render() {
        return (
            <input
                class="input-textboxes search-input"
                type="text"
                placeholder="Search..."
                value={this.props.filterText}
                onChange={this.handleFilterTextChange}
            />
        );
    }
}

export default SearchBar;