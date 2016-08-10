import React, { Component } from 'react';
import '../css/Info.css';

class Info extends Component {
  render () {
    return (
      <div className="info-component">
        <h6>{this.props.artist}s Biography</h6>
        <p>{this.props.bio}</p>
      </div>
    )
  }
}

export default Info;
