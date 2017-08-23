import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/* Local */
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  onInputChange(event) {
    this.setState({term: event.target.value});
  };

  /*fetch weather data for specific location */
  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''}); //clear user input

  }

  render() {
    return (
      //callback to submit 'form'
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecase in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  };
};

/* make sure action flows down to middleware and onto all reducers */
function mapDispathToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispathToProps)(SearchBar); //null is to let container know no need to worry aobut state
