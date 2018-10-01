import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { selectArtist } from '../actions';

class Deck extends Component {
  onDragStart(event, artist) {
    event.dataTransfer.setData('artist', artist);
  }

  renderList() {
    return this.props.artistsList.artists.map(artist => (
      <img 
        className='deck'
        name={artist.name}
        draggable="true"
        alt={artist.name}
        key={artist.name} 
        src={artist.pic} 
        onDragStart={(event) => this.onDragStart(event, artist)}
      />
      )).reverse();
  }
  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artistsList: state.allArtists,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectArtist: selectArtist }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
