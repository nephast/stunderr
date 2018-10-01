import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card';

class Deck extends Component {
  renderList() {
    return this.props.artists.map(artist => (
      <Card key={artist.name} src={artist.pic} />
      )).reverse();
  }
  render() {
    return (
      <div className="deck">
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artists: state.allArtists,
  };
}

export default connect(mapStateToProps)(Deck);
