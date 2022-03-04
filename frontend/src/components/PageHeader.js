import './PageHeader.css'
import {Link} from "react-router-dom"
export default function PageHeader() {
return (
    <div className="pageHeader">
        <h1 className="homePageHeader" ><a className="homePageLink" href="/" >Der Mac Gillis Fanclub</a></h1>
        <ul className="buttonGroup">
        <form className="searchBar">
            <button type="submit" className="typeButton">Anime Suchen</button>
            <input type="text" className="inputField" placeholder="Titel eingeben..." ></input>
        </form> 
        <Link to="/Animes">
        <button className="typeButton" type="button">Komplette Liste</button>
        </Link>
        <Link to="/Favoriten">
        <button className="typeButton" type="button ">Favoriten Liste</button>
        </Link>
        <Link to="Top-Liste">
        <button className="typeButton" type="button">Top-Liste</button>
        </Link>
        </ul>
        </div>
            
)





}