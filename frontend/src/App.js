import React, {useEffect, useState} from "react";
import AnimeListe from "./components/AnimeListe";
import './App.css'

export default function App() {
    const [listenType, setListenType] = useState('Anime')
    const [animes, setAnimes] = useState([])
   

    useEffect(() => {
        fetch(`http://localhost:8080/${listenType}`)
            .then(response => response.json())
            .then(json => setAnimes(json))
    }, [listenType])




return (
    <>
    <div className="pageHeader">
        <h1 className="homePageHeader">Der Mac Gillis Fanclub</h1>
        <ul className="buttonGroup">
        <form className="searchBar">
            <button type="submit" className="typeButton">Anime Suchen</button>
            <input type="text" className="inputField" placeholder="Titel eingeben..." ></input>
        </form> 
        <button className="typeButton" onClick={() => {setListenType('Anime')}}>Komplette Liste</button>
        <button className="typeButton" onClick={() => {setListenType('Anime/Favorite')}}>Favoriten Liste</button>
        <button className="typeButton" onClick={() => {setListenType('Anime/Wertung')}}>Top Liste</button>
        </ul>

    </div>
       <p className="animeListe">
           {animes.map(anime => {
               return<AnimeListe anime={anime}></AnimeListe>
            })}
       </p>
    </>
        )
    }
        
        
        
        
        
        


