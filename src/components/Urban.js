import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import util from '../util/utils-urban.js'
import '../css/Urban.css';

class Urban extends Component {
  constructor() {
  super();
  this.state = {
    urbanInput: '',
    urbanResponse: {},
    definition: '',
    example: ''
  }
}

handleChange(event){
  this.setState({urbanInput: event.target.value})
}

onClickTranslate(event) {
  //do all ajax here
  const urbanInput = this.state.urbanInput;
  util.getUrbanTranslation(urbanInput).then((res) => {
    this.setState({urbanResponse: res});
    // console.log('urbanResponse: ', this.state.urbanResponse);
    this.setState({definition: res.data.list[0].definition});
    this.setState({example: res.data.list[0].example});
  });
}

  render() {
    return (
      <div className="urban-component">
        <h6>Urban Translator</h6>
        <h8> Search below for the meaning of a lyric.</h8>
          <input className='urban-input' placeholder="what would you like defined?" onChange={(event) => this.handleChange(event)}></input>
          <div className='urban-results'>
            <p>Definition: {this.state.definition}</p>
            <p>Example: {this.state.example}</p>
          </div>
          <div className='button-container'>
          <button className='urban-button waves-effect waves-teal btn-flat' onClick={(event) => this.onClickTranslate(event)}>Search it</button>
          </div>
          <ReactPlayer className='player' url={this.state.urbanResponse.url} playing/>
      </div>
    );
  }
}

export default Urban;
