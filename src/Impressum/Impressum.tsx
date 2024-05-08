import "./Impressum.css";
import "./ImpressumMedia.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

function Impressum() {
    return (
        <div id="impressum-div">
            <Header />
            <div id="impressum-content">
                <h1>Impressum</h1>
                <h2>Anschrift</h2>
                <div>
                    Severin Hanke<br/>
                    c/o Block Services<br/>
                    Stuttgarter Str. 106<br/>
                    70736 Fellbach
                </div>
                <h2>Kontakt</h2>
                <a href="mailto:mail@severin-hanke.de" title="Email">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <span>mail@severin-hanke.de</span>
                </a>
            </div>
            <Footer />
        </div>
    );
}

export default Impressum;
