import React, { Component } from 'react';
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
      firebase.viewAll()
     .then(res => {
      console.log('results', res);
      this.setState({
        results: [res]
      })
    })
  }

  onClick(e) {
    e.preventDefault();
    console.log(e.target.value)
    firebase.delete(e.target.value)
    .then(res => {
      console.log(res);
    })
  }


  render () {
    const favoritesArray = [];
    const logArray = [];
    for (let key in this.state.results) {
      favoritesArray.push(this.state.results[key])
      for (let key in favoritesArray[0]) {
        logArray.push(favoritesArray[0][key])
      }
      console.log('fave array',favoritesArray);
      console.log('fave array',logArray);
    }

    return (
      <div className="favorites-component">
        <h4>All Favorites</h4>
          <div>
            {
              logArray.map((artist, i) => {
                return <div key={i}>{artist.artist}, {artist.song} <div><button value={artist.artist + artist.song} onClick={(event) => this.onClick(event)}>Delete</button></div></div>
              })
            }
          </div>
      </div>
    )
  }
}

export default Favorites;
