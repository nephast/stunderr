import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { noLove } from '../actions';

class NoLove extends Component {
  constructor() {
    super()
    this.noLoveText = 'No thanks';
  }
  onDragOver(event) {
    event.preventDefault();
  }

  onDrop(event) {
    let artist = event.dataTransfer.getData('artist');
    this.props.noLove(artist);
  }

  render() {
    return (
      <div  
        className="no-love"
        onDragOver={(event) => this.onDragOver(event)}
        onDrop={(event => this.onDrop(event))}
      >
        <div className="no-love-text">
        {this.noLoveText}
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
  return bindActionCreators({ noLove: noLove }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoLove);
