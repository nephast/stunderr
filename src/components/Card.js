import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card-container">
        <img className="card" src={this.props.src} />
      </div>
    );
  }
}

export default Card;
