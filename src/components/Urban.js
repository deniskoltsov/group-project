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
        <h6>Urban Translator</h6>
        <h8>Don't get the meaning of a lyric?<br></br> Look it up below.</h8>
          <input placeholder="what would you like defined?" onChange={(event) => this.handleChange(event)}></input>
          <button className='urban-button waves-effect waves-teal btn-flat' onClick={(event) => this.onClickTranslate(event)}>Search it</button>
          <ReactPlayer className='player' url={this.state.urbanResponse.url} playing/>
      </div>
    );
  }
}

export default Urban;
