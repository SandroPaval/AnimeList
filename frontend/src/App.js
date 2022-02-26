import React, {useEffect, useState} from "react";
import AnimeListe from "./components/AnimeListe";
import {Anime} from "./components/Anime";
import './App.css'

export default function App() {
    const [listenType, setListenType] = useState('Anime')
    const [animes, setAnimes] = useState([])
    const [listenName, setListenName] = useState('Komplette Liste')
    const [animeId, setAnimeId] = useState('')
    const [storedFavorite, setStoredFavorite] = useState(false)
    const [buttonClicked, setButtonClicked] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:8080/${listenType}`)
            .then(response => response.json())
            .then(json => setAnimes(json))
    }, [listenType])




return (
    <>
    <div>
        <button className="completeButton" onClick={() => {setListenType('Anime'); setListenName('Komplette Liste')}}>Komplette Liste</button>
        <button className="favoriteButton" onClick={() => {setListenType('Anime/Favorite'); setListenName('Favoriten')}}>Favoriten Liste</button>
        <button className="wertungsButton" onClick={() => {setListenType('Anime/Wertung'); setListenName('Top Liste')}}>Top Liste</button>
    </div>
        <h1 className="homePageHeader">Der Mac Gillis Fanclub</h1>
        <h2 className="animeHeader">{listenName}: </h2>
       <p className="animeListe">
           {animes.map(anime => {
           return<AnimeListe anime={anime}></AnimeListe>

        })}
       </p>


    </>


)



}