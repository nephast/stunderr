import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { selectArtist } from '../actions';

class Deck extends Component {
  constructor() {
    super()
    this.noMoreArtist = 'No more artists for now';
  }
  onDragStart(event, artist) {
    // change opacity of moving object here?
    // show next artist on the stack here?
    event.dataTransfer.setData('artist', artist);
  }

  renderList() {
    if (this.props.artistsList.artists.length > 0) {
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
    return this.noMoreArtist;
  }

  render() {
    return (
      <div className='deck-container'>
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
