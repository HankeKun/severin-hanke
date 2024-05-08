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
                <div>
                    <span className="about-me-point">Aktueller Arbeitgeber:</span>
                    <a href="https://vomatec.de/" title="VOMATEC" target="_blank" rel="noopener noreferrer"> <span>VOMATEC Innovations GmbH</span></a>
                    <br/>
                    <span className="about-me-point">Rolle:</span> App-Entwickler / Masterarbeit schreiben
                    <br/>
                    <span className="about-me-point">Aktuelles Projekt:</span>
                    <a href="https://play.google.com/store/apps/details?id=com.vomatec.crewapp" title="Crew-App Android"
                       target="_blank" rel="noopener noreferrer"> <span>Crew-App Android</span></a>
                    <span> / </span>
                    <a href="https://apps.apple.com/de/app/arigon-next-crew-app/id1613174367" title="Crew-App Apple"
                       target="_blank" rel="noopener noreferrer"> <span>Crew-App Apple</span></a>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutMe;
