import "./Impressum.css";
import "./ImpressumMedia.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {useTranslation} from "react-i18next";

function Impressum() {
    const {t} = useTranslation();

    return (
        <div id="impressum-div">
            <Header />
            <div id="impressum-content">
                <h1>{t('legalNotice')}</h1>
                <h2>{t('address')}</h2>
                <div>
                    Severin Hanke<br/>
                    c/o Block Services<br/>
                    Stuttgarter Str. 106<br/>
                    70736 Fellbach
                </div>
                <h2>{t('contact')}</h2>
                <a href="mailto:mail@severin-hanke.de" title={t('email')}>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <span>mail@severin-hanke.de</span>
                </a>
            </div>
            <Footer />
        </div>
    );
}

export default Impressum;
