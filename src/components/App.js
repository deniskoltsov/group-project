import React, {Component} from 'react';
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

  handleChangeArtist(event) {
    this.setState({searchArtistInput: event.target.value})
  }

  handleChangeSong(event) {
    this.setState({searchSongInput: event.target.value})
  }

  onClickSearch(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className='nav-container'>
          <div className='nav-item'>Logo Goes Here</div>
          <div className='nav-item'>
            <form onSubmit={(event) => this.onClickSearch(event)}>
              <input onChange={(event) => this.handleChangeArtist(event)}/>
              <input onChange={(event) => this.handleChangeSong(event)}/>
              <button>Click</button>
            </form>
          </div>
          <div className='nav-item'>About Team</div>
        </div>
        <Main artist={this.state.searchArtistInput} song={this.state.searchSongInput}/>
      </div>
    );
  }
}

export default App;
