import React from "react";
import "./SearchInput.css";

class SearchInput extends React.Component<object, { SearchValue: string }> {
  constructor(props = {}) {
    super(props);
    this.state = {
      SearchValue: localStorage.getItem("inputValue") || "",
    };
  }

  componentWillUnmount(): void {
    localStorage.setItem("inputValue", this.state.SearchValue);
  }

  render(): React.ReactNode {
    return (
      <div className="search_input_wrapper">
        <input
          type="search"
          className="input_search"
          defaultValue={this.state.SearchValue}
          onChange={(e) => this.setState({ SearchValue: e.target.value })}
        ></input>
      </div>
    );
  }
}

export default SearchInput;
