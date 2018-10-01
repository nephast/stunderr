import React, { Component } from 'react';
import Deck from '../containers/Deck';
import Selected from '../containers/selected';

import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Deck/>
       <Selected />
      </div>
    );
  }
}

export default App;
