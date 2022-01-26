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
                    <a href="https://reactjs.org/">React JS</a>
                    <FontAwesomeIcon icon={faReact} />
                    <a href="https://getbootstrap.com/">Bootstrap</a>
                    <FontAwesomeIcon icon={faBootstrap} />
                    <a href="https://fontawesome.com/">FontAwesome</a>
                    <FontAwesomeIcon icon={faFontAwesome} />
                </div>
            </footer>
        </div>
    );
}

export default Footer;