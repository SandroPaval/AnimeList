import React from "react";
import './AnimeListe.css'

export default function AnimeListe (props){
    const {animeID, titel, img, genre, folgen, wertung} = props.anime;
    return (
        <div>

        <ul>
                <p key={animeID} className="animeCertain">
                    <h1 className="animeTitel"> Titel: {titel}</h1>
                    <img className="animeBild" src={img} alt='' />
                    <ul className="animeBeschreibung">
                        <h2 className="descFont"> Genre: {genre}</h2>
                        <h2 className="descFont"> Folgen: {folgen}</h2>
                        <h2 className="descFont"> Wertung: {wertung}</h2>
                    </ul>
                </p>
        </ul>
    </div>

        );
}