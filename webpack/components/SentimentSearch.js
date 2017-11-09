import React, { Component } from 'react';

class SentimentSearch extends Component {
  render() {
    return (
      <div className="sentiment-search">
        <form>
          <input type="text" placeholder="Search terms, @names, #hashtags, and places" />
          <button type="submit">Search</button>
        </form>
        <div className="placeholder">PLACEHOLDER FOR RESULTS</div>
      </div>
    )
  }
}
export default SentimentSearch;
