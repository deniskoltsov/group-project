import React, { Component } from 'react';
import '../css/Analyze.css';

class Analyze extends Component {

render() {
  const emotions = this.props.tonesObject.map((object, i)  => {
    for (var key in object) {
      return <li key={i}>{object.tone_name}, {object.score}</li>
      }
  })
  return (
    <div className="analyze-component">
      <div className='anazlyze-container'>
      <div>
        <ul>
          {emotions}
        </ul>
        </div>
      </div>
    </div>
  );
  }
}

export default Analyze
