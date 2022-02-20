import React, { Component} from "react";
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      animes: [],
      favoriten: [],
    }
  }

  componentDidMount() {

    axios.get('http://localhost:8080/Anime')
    .then(res => {
      const animes = res.data;
      this.setState({animes});
    })

    axios.get('http://localhost:8080/Anime/Favorite')
        .then(res => {
            const favoriten = res.data;
            this.setState({favoriten});
        })
  }



render() {

          return(
              <div className="homePage"> <h1 className="homePageHeader">Der Mac Gillis Fanclub</h1>
                <div className="favoritenListe">
                    <h1 className="favoritenHeader">Favoriten: </h1>
                    <ul>
                        {this.state.favoriten.map(favorit => (
                            <p  key={favorit.animeID} className="animeCertain">
                                <h1 className="animeTitel"> Titel: {favorit.titel}</h1>
                                <img className="animeBild" src={favorit.img} alt='' />
                                <ul className="animeBeschreibung">
                                    <h2> Genre: {favorit.genre}</h2>
                                    <h2> Folgen: {favorit.folgen}</h2>
                                    <h2> Wertung: {favorit.wertung}</h2>
                                </ul>
                            </p>
                        ))}+
                    </ul>


                </div>
              <div className="animeListe">
                    <h1 className="animeHeader">Animes: </h1>
                  <ul>
                      {this.state.animes.map(anime => (
                          <p key={anime.animeID} className="animeCertain">
                              <h1 className="animeTitel"> Titel: {anime.titel}</h1>
                              <img className="animeBild" src={anime.img} alt='' />
                              <ul className="animeBeschreibung">
                              <h2> Genre: {anime.genre}</h2>
                              <h2> Folgen: {anime.folgen}</h2>
                              <h2> Wertung: {anime.wertung}</h2>
                              </ul>
                          </p>
                          ))}
                      </ul>


                  </div>
              </div>

          );
}
}
 export default App;
