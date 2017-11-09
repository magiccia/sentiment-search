import React, { Component } from 'react';
import {render} from 'react-dom';
import SentimentSearch from './components/SentimentSearch';

class App extends Component {
  render() {
    return (
      <SentimentSearch />
    )
  }
}

render(<App />, document.getElementById('root'));
