import "./SHCoding.css";
import "./SHCodingMedia.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {RouteNames} from "../constants/RouteNames";

import CountdownsIcon from "../images/Apps/Countdowns-Icon.webp";
import PokeManagerIcon from "../images/Apps/Poke-Manager-Icon.webp";
import {useTranslation} from "react-i18next";

function SHCoding() {
    const {t} = useTranslation();

    return (
        <div id="shcoding-div">
            <Header />
            <div id="shcoding-content">
                <h1>SH Coding</h1>
                <div>
                    {t('shCodingDescription')}
                </div>
            </div>
            <div id="shcoding-apps-content">
                <div>
                    <a className="upper-a" href="https://www.poke-manager.com" title={`Poké-Manager ${t('website')}`} target="_blank" rel="noopener noreferrer">
                        <img src={PokeManagerIcon} alt={`Poké-Manager ${t('icon')}`}/>
                        <span>Poké-Manager</span>
                    </a>
                    <a href={RouteNames.shCodingPokeManager} title={t('privacyPolicy')}>
                        <span>{t('privacyPolicy')}</span>
                    </a>
                </div>
                <div>
                    <a className="upper-a" href="https://play.google.com/store/apps/details?id=de.shcoding.countdown" title="Countdowns Play Store" target="_blank" rel="noopener noreferrer">
                        <img src={CountdownsIcon} alt={`Countdowns ${t('icon')}`}/>
                        <span>Countdowns</span>
                    </a>
                    <a href={RouteNames.shCodingCountdowns} title={t('privacyPolicy')}>
                        <span>{t('privacyPolicy')}</span>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SHCoding;
