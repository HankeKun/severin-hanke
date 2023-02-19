import './Footer.css';
import React from "react";
import { faReact, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
            <footer>
                <a id="footer-impressum" href="/impressum">Impressum</a>

                <span>Webseite erstellt von Severin Hanke</span>

                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                    React JS
                    <FontAwesomeIcon icon={faReact} />
                </a>

                <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">
                    FontAwesome
                    <FontAwesomeIcon icon={faFontAwesome} />
                </a>
            </footer>
    );
}

export default Footer;
