import React from "react";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";
import AboutSection from "../components/AboutSection"

function Home () {
    return(
        <div className="flex justify-center items-center flex-col ">
            <HeroSection />
            <CardSection />
            <AboutSection />
        </div>
    )
}

export default Home