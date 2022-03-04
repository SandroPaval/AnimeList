import react, {useState, useEffect} from "react"
import AnimeListe from '../components/AnimeListe'

export default function TopListe() {
    
    const [bestenListe, setBestenListe] = useState([]);

    useEffect( () => {
        fetch("http://localhost:8080/Anime/Wertung")
            .then(response => response.json())
            .then(json => setBestenListe(json))
    },[])

    return (
        <p className="animeListe">
            {bestenListe.map(anime => {
                    return<AnimeListe anime={anime}></AnimeListe>
            })}
        </p>
    )



}