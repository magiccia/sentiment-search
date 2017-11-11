import axios from 'axios';
import SentimentResults from './SentimentResults';
import React, { Component } from 'react';

const baseurl = "https://ffkouyywjc.execute-api.us-east-1.amazonaws.com/dev/search"

class SentimentSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      results: [],
    }
  }

  submitHandler(e) {
    e.preventDefault();

    axios.get(baseurl, {
      params: {
        'q': this.state.searchString
      }
    })
      .then(res => {
        console.log(res);
        this.setState({
          results: res.data.results
        });
      });
  }

  changeHandler(e) {
    this.setState({
      searchString: e.target.value
    });
  }

  render() {
    return (
      <div className="sentiment-search">
        <form onSubmit={this.submitHandler.bind(this)}>
          <input type="text" name="searchString" value={this.state.searchString} onChange={this.changeHandler.bind(this)} placeholder="Search terms, @names, #hashtags, and places" />
          <button type="submit">Search</button>
        </form>
        <SentimentResults data={this.state.results} />
        <div className="placeholder">PLACEHOLDER FOR RESULTS</div>
      </div>
    )
  }
}
export default SentimentSearch;
