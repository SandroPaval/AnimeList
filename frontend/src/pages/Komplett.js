import React, {useEffect, useState} from "react";
import AnimeListe from "../components/AnimeListe.js";

export default function Komplett() {
const [kompletteListe, setKompletteListe] = useState([])

useEffect(() => {
    fetch("http://localhost:8080/Anime")
    .then(response => response.json())
    .then(json => setKompletteListe(json))
},[])

return (
    <p className="animeListe">
        {kompletteListe.map(anime => {
                return<AnimeListe anime={anime}></AnimeListe>
        })}
    </p>
)









}