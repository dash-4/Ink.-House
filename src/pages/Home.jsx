import React from "react";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";
import AboutSection from "../components/AboutSection"
import NewSection from "../components/NewSection";

function Home () {
    return(
        <div className="flex justify-center items-center flex-col gap-20">
            <HeroSection />
            <CardSection />
            <NewSection />
            <AboutSection />
        </div>
    )
}

export default Home