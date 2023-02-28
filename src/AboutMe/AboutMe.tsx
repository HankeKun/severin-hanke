import "./AboutMe.css";
import "./AboutMeMedia.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function AboutMe() {
    return (
        <div id="aboutme-div">
            <Header/>
            <div id="aboutme-content">
                <h1 id="h1-aboutme">Über mich</h1>
                <div id="div-aboutme">
                    Hi, ich bin Mobile Computing-Student im Master mit einem großen Interesse an Appentwicklung.
                    Desweiteren liebe ich Pokémon und Wandertouren mit meiner Verlobten 😊
                    Bei Spielen und GitHub bin ich meistens mit dem Namen HankeKun unterwegs.
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutMe;
