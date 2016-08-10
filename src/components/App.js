import React, { Component } from 'react';
import Main from './Main.js';

import '../css/App.css';

class App extends Component {
  constructor() {
  super();
  this.state = {
    searchArtistInput: '',
    searchSongInput: ''
  }
}

handleChangeArtist(event){
  this.setState({searchArtistInput: event.target.value})
}

handleChangeSong(event){
  this.setState({searchSongInput: event.target.value})
}

onClickSearch(event) {
  event.preventDefault();
}

  render() {
    return (
      <div className="App">
        <form onSubmit={(event) => this.onClickSearch(event)}>
          <input onChange={(event) => this.handleChangeArtist(event)}/>
          <input onChange={(event) => this.handleChangeSong(event)}/>
          <button>Click</button>
        </form>
        <Main artist={this.state.searchArtistInput} song={this.state.searchSongInput}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
