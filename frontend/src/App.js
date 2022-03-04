
import './App.css'
import PageHeader from "./components/PageHeader"
import Komplett from "./pages/Komplett";
import Favoriten from "./pages/Favoriten";
import TopList from "./pages/TopListe"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

    return (
        <BrowserRouter>
            <div>
                <PageHeader></PageHeader>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Animes" element={<Komplett />} />
                    <Route path="/Favoriten" element={<Favoriten />} />
                    <Route path="/Top-Liste" element={<TopList/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )






}









