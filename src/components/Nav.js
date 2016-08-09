import React, { Component } from 'react';
import util from '../util/helpers.js';
import {Link} from 'react-router'
import '../css/Nav.css';

class Nav extends Component {
  constructor() {
  super();
  this.state = {
    searchArtistInput: '',
    searchSongInput: '',
    searchResponse:{}
  }
}

handleChangeArtist(event){
  this.setState({searchArtistInput: event.target.value})
}

handleChangeSong(event){
  this.setState({searchSongInput: event.target.value})
}

onClickSearch(event) {
  //do all ajax here
  const searchArtistInput = this.state.searchArtistInput;
  const searchSongInput = this.state.searchSongInput;
  util.getSong(searchArtistInput, searchSongInput).then((res) => {
    this.setState({searchResponse: res});
    console.log(res);
  });
}

  render() {
    return (
      <div className="nav-component">
        <div className='nav-items'>
          <div className='logo'></div>
          <p>Our cool logo goes here.</p>
        </div>
        <div className='nav-items'>
          <input placeholder="Artist" onChange={(event) => this.handleChangeArtist(event)}></input>
          <input placeholder="Song Title" onChange={(event) => this.handleChangeSong(event)}></input>
          <button className='search-button' onClick={(event) => this.onClickSearch(event)}>Search</button>
        </div>
        <div className='nav-items'>
          <Link className="link" to="/about">About the Team</Link>
        </div>
      </div>
    );
  }
}

export default Nav;
