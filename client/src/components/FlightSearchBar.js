import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CloseIcon from '@mui/icons-material/Close';
class FlightSearchBar extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
    placeholer: PropTypes.instanceOf(String)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };
  }

  onChange = (e) => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    console.log(e.placeholder);
    console.log(suggestions[3].toLowerCase().indexOf(userInput.toLowerCase()))
    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e) => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

   clearInput = () => {
    this.setState({ userInput: "" });
  }

  // User key press actions
  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
        placeholder
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <div className="sug">
                  <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
                </div>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <div className="search px-10">
      <div className="searchInputs">
        <input
          className="inputs"
          type="text"
          placeholder={this.props.placeholder}
          value={userInput}
          onKeyDown={onKeyDown}
          onChange={onChange}
        />
       
        <div className="clearInput">
          {filteredSuggestions.length === 0 ? undefined :
            <CloseIcon  onClick={this.clearInput} />
          }
        </div>
      </div>
      {suggestionsListComponent}
    </div>
      </Fragment>
    );
  }
}

export default FlightSearchBar;
