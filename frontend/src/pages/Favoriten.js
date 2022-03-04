import React, {useEffect, useState} from "react";
import AnimeListe from "../components/AnimeListe";

export default function Favoriten() {
const [favoriten, setFavoriten] = useState([])

useEffect(() => {
    fetch("http://localhost:8080/Anime/Favorite")
    .then(response => response.json())
    .then(json => setFavoriten(json))
},[])

return (
    <p className="animeListe">
        {favoriten.map(anime => {
                return<AnimeListe anime={anime}></AnimeListe>
        })}
    </p>
)

}