import './Footer.css';
import React from "react";
import { faReact, faBootstrap, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className="Footer">
            <footer id="div-footer">
                <div>
                    <span>Webseite erstellt von Severin Hanke</span>
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        React JS
                        <FontAwesomeIcon icon={faReact} />
                    </a>

                    <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                        Bootstrap
                        <FontAwesomeIcon icon={faBootstrap} />
                    </a>

                    <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">
                        FontAwesome
                        <FontAwesomeIcon icon={faFontAwesome} />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
