import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import util from '../util/utils-watson.js'
import '../css/Watson.css';

class Watson extends Component {
  constructor() {
  super();
  this.state = {
    watsonInput: '',
    watsonResponse: {}
  }
}

handleChange(event){
  this.setState({watsonInput: event.target.value})
}

onClickTranslate(event) {
  //do all ajax here
<<<<<<< HEAD
  const watsonInput = this.state.watsonInput;
  console.log(this.props.speech)
=======
  const watsonInput = this.props.speech;
  console.log('speech prop', this.props.speech)
>>>>>>> 5e7e44eef01e1417598e2282ee1ba676110f55db
  util.translate(watsonInput).then((res) => {
    this.setState({watsonResponse: res});
    console.log(res);
  });
}

  render() {
    return (
      <div className="App">
        <h2>hey</h2>
        <input placeholder="say something" onChange={(event) => this.handleChange(event)}></input>
        <button className='search-button' onClick={(event) => this.onClickTranslate(event)}>Say it</button>
        <ReactPlayer className='player' url={this.state.watsonResponse.url} playing/>
      </div>
    );
  }
}

export default Watson;
