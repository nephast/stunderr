import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { selectArtist } from '../actions';

class Selected extends Component {
  constructor() {
    super()
    this.selectedText = 'Yes!';
  }
  onDragOver(event) {
    event.preventDefault();
  }

  onDrop(event) {
    let artist = event.dataTransfer.getData('artist');
    this.props.selectArtist(artist)
  }

  render() {
    return (
      <div  
        className="selected"
        onDragOver={(event) => this.onDragOver(event)}
        onDrop={(event) => this.onDrop(event)}
      >
        <div className="selected-text">
        {this.selectedText}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    artists: state.allArtists,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectArtist: selectArtist }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Selected);
