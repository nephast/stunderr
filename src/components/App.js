import React, { Component } from 'react';
import '../App.css';

import Deck from '../containers/Deck';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Deck/>
      </div>
    );
  }
}

export default App;
