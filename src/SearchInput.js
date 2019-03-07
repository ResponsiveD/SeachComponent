import { Component } from "react";

export default class SearchInput extends Component {
  render() {
    return (
      <input
        type="text"
        ref="search"
        value={this.props.searchString}
        placeholder=""
        onChange={this.props.handleChange}
      />
    );
  }
}
