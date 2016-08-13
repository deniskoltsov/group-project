import React, {Component} from 'react';
import '../css/Favorites.css';
import firebase from '../util/utils-firebase.js';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      entry: ""
    }
  }

  componentDidMount() {
    firebase.viewAll().then(res => {
      console.log('results', res);
      this.setState({results: [res]})
    })
  }

  onClick(e) {
    e.preventDefault();
    console.log('input', e.target.value)
    firebase.delete(e.target.value).then(res => {
      console.log(res);
    })
  }

  render() {
    const favoritesArray = [];
    const logArray = [];
    for (let key in this.state.results) {
      if (this.state.results.length) {
        favoritesArray.push(this.state.results[key])
        for (let key in favoritesArray[0]) {
          if (this.state.results.length) {
            logArray.push(favoritesArray[0][key])
          }
        }
      }
      console.log('fave array', favoritesArray);
      console.log('log array', logArray);
    }

    return (
      <div className="favorites-component">
        <h4>All Favorites</h4>
        <div className='favorites-container'>
          {logArray.map((artist, i) => {
            return<div className='fav-item' key={i}>
                    <div className='fav-artist'><h6>Artist: {artist.artist}</h6></div>
                    <div className='fav-song'><h6>Song: {artist.song}</h6></div>
                    <img className='fav-cover' src={artist.cover} alt=''></img>
                    <br></br>
                    <button className='fav-delete-button waves-effect waves-teal btn-flat' value={artist.artist + artist.song} onClick={(event) => this.onClick(event)}>Delete</button>
                  </div>
          })}
        </div>
      </div>
    )
  }
}

export default Favorites;
