import React from 'react';
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import CollectionSection from "./Components/CollectionSection/CollectionSection";
import TeamSection from "./Components/TeamSection/TeamSection";
import FourthSection from "./Components/FourthSection/FourthSection";
import BasketballSection from "./Components/BasketballSection/BasketballSection";
import UsaSection from "./Components/UsaSection/UsaSection";
import TheNikeSection from "./Components/TheNikeSection/TheNikeSection";

const App = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <CollectionSection/>
            <TeamSection/>
            <FourthSection/>
            <BasketballSection/>
            <UsaSection/>
            <TheNikeSection/>
        </div>
    );
};

export default App;