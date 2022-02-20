import React, { Component} from "react";
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      animes: [],
    }
  }

  componentDidMount() {

    axios.get('http://localhost:8080/Anime')
    .then(res => {
      const animes = res.data;
      this.setState({animes});
    })
    
  }


render() {

          return(


              <div className="animeListe">

                  <ul>
                      {this.state.animes.map(anime => (
                          <p className="animeCertain">
                              <h1 className="animeTitel"> Titel: {anime.titel}</h1>
                              <img className="animeBild" src={anime.img} alt='' />
                              <ul className="animeBeschreibung">
                              <h2> Genre: {anime.genre}</h2>
                              <h2> Folgen: {anime.folgen}</h2>
                              <h2> Wertung: {anime.wertung}</h2>
                              </ul>
                          </p>
                          ))};
                      </ul>


                  </div>


          );
}
}
 export default App;