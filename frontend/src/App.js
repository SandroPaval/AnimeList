import React, {useEffect, useState} from "react";
import AnimeListe from "./components/AnimeListe";
import {Anime} from "./components/Anime";
import './App.css'

export default function App() {
    const [listenType, setListenType] = useState('Anime')
    const [animes, setAnimes] = useState([])
    const [listenName, setListenName] = useState('Komplette Liste')
   

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
        <button className="typeButton" onClick={() => {setListenType('Anime'); setListenName('Komplette Liste')}}>Komplette Liste</button>
        <button className="typeButton" onClick={() => {setListenType('Anime/Favorite'); setListenName('Favoriten')}}>Favoriten Liste</button>
        <button className="typeButton" onClick={() => {setListenType('Anime/Wertung'); setListenName('Top Liste')}}>Top Liste</button>
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
        
        
        
        
        
        


