import React, { Component } from 'react';
import util from '../util/utils-watson.js'

class Analyze extends Component {
  constructor() {
  super();
  this.state = {
    analysis: {},
    }
  }

  onClickAnalysis(event) {
    event.preventDefault();
    util.analyze(this.props.lyrics).then((json) => {
        this.setState({analysis: json});
        console.log({analysis: json});
      });
    }

render() {
  return (
    <div className="App">
      <button className='translate-button' onClick={(event) => this.onClickAnalysis(event)}>Analyze Lyrics</button>
    </div>
  );
  }
}

export default Analyze
