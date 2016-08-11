import React, { Component } from 'react';
import '../css/Favorites.css';
import firebase from '../util/utils-firebase.js';

class Favorites extends Component {

    constructor() {
      super();
      this.state = {
        results: []
      }
    }

    onClick(event) {
      event.preventDefault();
      firebase.viewAll()
     .then(res => {
      console.log('results', res);
      this.setState({
        results: [res]
      })
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
          <button onClick={(event) => this.onClick(event)}></button>
          <div>
            {
              logArray.map((artist, i) => {
                return <div key={i}>{artist.artist} {artist.song}</div>
              })
            }
          </div>
      </div>
    )
  }
}

export default Favorites;
