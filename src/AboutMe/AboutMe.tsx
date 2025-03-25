import "./AboutMe.css";
import "./AboutMeMedia.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useTranslation} from "react-i18next";

function AboutMe() {
    const {t} = useTranslation();

    return (
        <div id="aboutme-div">
            <Header/>
            <div id="aboutme-content">
                <h1 id="h1-aboutme">{t('aboutMe')}</h1>
                <div id="div-aboutme">
                    {t('aboutMePart1')}<br/><br/>
                    {t('aboutMePart2')}<br/><br/>
                    {t('aboutMePart3')} 😊<br/><br/>
                    {t('aboutMePart4')}
                </div>
                <div>
                    <span className="about-me-point">{t('currentEmployer')}:</span>
                    <a href="https://vomatec.de/" title="VOMATEC Innovations GmbH" target="_blank" rel="noopener noreferrer"> <span>VOMATEC Innovations GmbH</span></a>
                    <br/>
                    <span className="about-me-point">{t('responsibilities')}:</span> {t('appWebDevelopment')}
                    <br/>
                    <span className="about-me-point">{t('currentProject')}:</span>
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
