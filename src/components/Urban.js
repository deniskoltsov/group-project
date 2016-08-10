import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import util from '../util/utils-urban.js'
import '../css/Urban.css';

class Urban extends Component {
  constructor() {
  super();
  this.state = {
    urbanInput: '',
    urbanResponse: {}
  }
}

handleChange(event){
  this.setState({urbanInput: event.target.value})
  console.log('urbanInput:', this.state.urbanInput);
}

onClickTranslate(event) {
  //do all ajax here
  const urbanInput = this.state.urbanInput;
  console.log('urbanInput: ', urbanInput);
  util.getUrbanTranslation(urbanInput).then((res) => {
    this.setState({urbanResponse: res});
    console.log('urbanResponse: ', this.state.urbanResponse);
  });
}

  render() {
    return (
      <div className="urban-component">
        <p>Urban stuff goes here.</p>
          <input placeholder="say something" onChange={(event) => this.handleChange(event)}></input>
          <button className='search-button' onClick={(event) => this.onClickTranslate(event)}>Say it</button>
          <ReactPlayer className='player' url={this.state.urbanResponse.url} playing/>
      </div>
    );
  }
}

export default Urban;
