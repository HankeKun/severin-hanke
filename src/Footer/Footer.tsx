import "./Footer.css";
import "./FooterMedia.css";
import React from "react";
import {faReact, faFontAwesome} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <footer>
            <div id="footer-content">
                <a id="footer-impressum" href="/src/Impressum/Impressum">Impressum</a>

                <span>Webseite erstellt von Severin Hanke</span>

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
