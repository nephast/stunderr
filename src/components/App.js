import React, { Component } from 'react';
import Deck from '../containers/Deck';
import Selected from '../containers/selected';
import NoLove from '../containers/noLove';

import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NoLove />
       <Deck/>
       <Selected />
      </div>
    );
  }
}

export default App;
