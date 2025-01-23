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
                    Hallo, ich bin Severin!<br/><br/>
                    Ich habe meinen Master of Science in Mobile Computing abgeschlossen und bin leidenschaftlich daran interessiert, innovative digitale Lösungen zu entwickeln.<br/><br/>
                    Wenn ich nicht gerade programmiere, tauche ich in die faszinierende Welt der Pokémon ein oder erkunde mit meiner Verlobten die schönsten Wanderwege – immer auf der Suche nach neuen Abenteuern 😊<br/><br/>
                    In der Gaming- und Entwickler-Community bin ich meist als HankeKun unterwegs, sowohl bei Spielen als auch auf GitHub. Schau gerne vorbei!
                </div>
                <div>
                    <span className="about-me-point">Aktueller Arbeitgeber:</span>
                    <a href="https://vomatec.de/" title="VOMATEC" target="_blank" rel="noopener noreferrer"> <span>VOMATEC Innovations GmbH</span></a>
                    <br/>
                    <span className="about-me-point">Aufgaben:</span> App- & Web-Entwicklung
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
