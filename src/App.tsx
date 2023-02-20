import React from 'react';

import './App.scss';
import TitlePage from "./Components/TitlePage/TitlePage";
import MainPage from './Components/MainPage/MainPage';
import MapPage from "./Components/MapPage/MapPage";
import {Route, Routes} from 'react-router-dom';
import ReservePage from "./Components/ReservePage/ReservePage";
import GalleryPage from "./Components/GalleryPage/GalleryPage";
import MenuPage from "./Components/MenuPage/MenuPage";

function App() {


    function Scroll() {

        window.scrollTo({
            top: 9000,
            behavior: "smooth"
        });
    }
console.log(window.location.pathname)

    return (

        <div className="App">



            <Routes>
                <Route path="" element={
                    <>
                        <button onClick={Scroll} className="hover-underline-animation">Заказать Столик</button>
                   <TitlePage/>
                    <MainPage/>
                    </>
                }>


                </Route>
            </Routes>
            <Routes>
                <Route path="/map" element={
                   <MapPage/>
                }>

                </Route>
            </Routes>
            <Routes>
                <Route path="/reserve" element={
                    <ReservePage/>
                }>

                </Route>
            </Routes>
            <Routes>
                <Route path="/gallery" element={
                    <GalleryPage/>
                }>

                </Route>
            </Routes>
            <Routes>
                <Route path="/menu" element={
                    <MenuPage/>
                }>

                </Route>
            </Routes>
        </div>
    );
}

export default App;
