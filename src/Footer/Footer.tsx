import "./Footer.css";
import "./FooterMedia.css";
import React from "react";
import {RouteNames} from "../constants/RouteNames";
import {faReact, faFontAwesome} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslation} from "react-i18next";

function Footer() {
    const {t} = useTranslation();

    return (
        <footer>
            <div id="footer-content">
                <a id="footer-impressum" href={RouteNames.legalNotice}>{t('legalNotice')}</a>

                <span>{t('websiteCreatedBy')}</span>

                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                    React JS
                    <FontAwesomeIcon icon={faReact}/>
                </a>

                <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">
                    FontAwesome
                    <FontAwesomeIcon icon={faFontAwesome}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
