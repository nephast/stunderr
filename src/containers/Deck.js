import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { selectArtist, dragArtist } from '../actions';

class Deck extends Component {
  onDragStart(event, artist) {
    this.props.dragArtist(artist)
    // console.log('DRAG START ARTIST: ', artist)
    event.dataTransfer.setData('artist', artist);
    // console.log('ARTIST EVENT IS: ', event.target.name)
  }

  renderList() {
    let newArtists = this.props.artistsList.artists.filter(artist => artist.love === undefined);
    console.log('ARTIST ARRAY: ', newArtists)
    return newArtists.map(artist => (
      <img 
        name={artist.name}
        draggable="true"
        alt={artist.name}
        key={artist.name} 
        src={artist.pic} 
        onDragStart={(event) => this.onDragStart(event, artist)}
        // onClick={() => this.props.selectArtist(artist)}
      />
      ));
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
    artistsList: state.allArtists,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectArtist: selectArtist, dragArtist: dragArtist }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
