import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { selectArtist } from '../actions';

class Deck extends Component {
  renderList() {
    return this.props.artists.map(artist => (
      <img 
        key={artist.name} 
        src={artist.pic} 
        onClick={() => this.props.selectArtist(artist)}
      />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectArtist }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
