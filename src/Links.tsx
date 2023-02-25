import "./Links.css";
import React from "react";
import {faGithub, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Pokeball from "./images/Pokeball.png";
import Header from "./Header";
import Footer from "./Footer";

function Links() {
    return (
        <div id="links-div">
            <Header/>
            <div id="links-content">
                <h1>Links</h1>
                <div id="links-a">
                    <a href="https://github.com/HankeKun" title="GitHub" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub}/>
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.instagram.com/HankeKun/" title="Instagram" target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram}/>
                        <span>Instagram</span>
                    </a>
                    <a href="mailto:mail@severin-hanke.de" title="Email">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <span>E-Mail</span>
                    </a>
                    <a href="https://www.youtube.com/@HankeKun" title="YouTube" target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube}/>
                        <span>YouTube</span>
                    </a>
                    <a href="https://www.twitter.com/HankeKun" title="Twitter" target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter}/>
                        <span>Twitter</span>
                    </a>
                    <a href="https://www.pokewiki.de/Darkrai" title="Lieblingspokémon" target="_blank"
                       rel="noopener noreferrer">
                        <img src={Pokeball} alt="Pokeball"/>
                        <span>Lieblingspokémon</span>
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Links;
