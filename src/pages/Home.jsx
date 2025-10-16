import React from "react";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";

function Home () {
    return(
        <div className="flex justify-center items-center flex-col ">
            <HeroSection />
            <CardSection />
        </div>
    )
}

export default Home