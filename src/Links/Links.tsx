import "./Links.css";
import "./LinksMedia.css";
import React from "react";
import {faGithub, faInstagram, faLinkedin, faThreads, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Pokeball from "../images/Pokeball.webp";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useTranslation} from "react-i18next";

function Links() {
    const {t} = useTranslation();

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
                    <a href="https://www.linkedin.com/in/severin-hanke-788513232/" title="LinkedIn" target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://www.instagram.com/HankeKun/" title="Instagram" target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram}/>
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.threads.net/@hankekun" title="Threads" target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faThreads}/>
                        <span>Threads</span>
                    </a>
                    <a href="mailto:mail@severin-hanke.de" title={t('email')}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <span>{t('email')}</span>
                    </a>
                    <a href="https://www.youtube.com/@HankeKun" title="YouTube" target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube}/>
                        <span>YouTube</span>
                    </a>
                    <a href="https://www.twitter.com/HankeKun" title="Twitter / X" target="_blank"
                       rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter}/>
                        <span>Twitter / X</span>
                    </a>
                    <a href="https://www.pokewiki.de/Darkrai" title={t('favoritePokemon')} target="_blank"
                       rel="noopener noreferrer">
                        <img src={Pokeball} alt="Pokeball"/>
                        <span>{t('favoritePokemon')}</span>
                    </a>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Links;
