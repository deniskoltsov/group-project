import React, { Component } from 'react';
import '../css/Analyze.css';

class Analyze extends Component {

render() {
  const emotions = this.props.tonesObject.map((object, i)  => {
      return <li className='elements' key={i}><span className='name'>{object.tone_name}</span>: <span className='score'>{object.score}</span></li>
      console.log({this.props});
  })
  return (
    <div className="analyze-component">
      <h6>Song Emotions Analyzer</h6>
      <div className='analyze-container'>
        <ul className='ul-container'>
          {emotions}
        </ul>
      </div>
    </div>
  );
  }
}

export default Analyze
