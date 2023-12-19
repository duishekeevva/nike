import React from 'react';
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import CollectionSection from "./Components/CollectionSection/CollectionSection";
import TeamSection from "./Components/TeamSection/TeamSection";
import FourthSection from "./Components/FourthSection/FourthSection";
import BasketballSection from "./Components/BasketballSection/BasketballSection";
import UsaSection from "./Components/UsaSection/UsaSection";
import TheNikeSection from "./Components/TheNikeSection/TheNikeSection";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Admin from "./Pages/Admin/Admin";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/admin' element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;