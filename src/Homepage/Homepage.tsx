import "./Homepage.css";
import "./HomepageMedia.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useTranslation} from "react-i18next";

import SeverinWaldalgesheim from "../images/Severin_Waldalgesheim-512.webp";
import video from "../images/magic.webm"

function Homepage() {
    const {t} = useTranslation();

    return (
        <div id="homepage-div">
            <Header/>
            <video id="homepage-video" playsInline={true} autoPlay={true} muted={true} loop={true}>
                <source src={video} type="video/webm"/>
            </video>
            <div id="homepage-content">
                <img src={SeverinWaldalgesheim} alt="Severin"/>
                <div id="homepage-title">
                    <h1>Severin Hanke</h1>
                    <div>{t('appDeveloper')}</div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Homepage;
