import React, {useEffect} from 'react';
import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import CollectionSection from "../../Components/CollectionSection/CollectionSection";
import TeamSection from "../../Components/TeamSection/TeamSection";
import FourthSection from "../../Components/FourthSection/FourthSection";
import BasketballSection from "../../Components/BasketballSection/BasketballSection";
import UsaSection from "../../Components/UsaSection/UsaSection";
import TheNikeSection from "../../Components/TheNikeSection/TheNikeSection";
import axios from "axios";

const HomePage = () => {
    useEffect(() => {
        axios('https://65642480ceac41c0761d7ea7.mockapi.io/nike')
            .then(({data})=>console.log(data))
    }, []);
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

export default HomePage;