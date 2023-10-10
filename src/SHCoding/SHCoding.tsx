import "./SHCoding.css";
import "./SHCodingMedia.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {RouteNames} from "../constants/RouteNames";

import CountdownsIcon from "../images/Apps/Countdowns-Icon.png";
import PokeManagerIcon from "../images/Apps/Poke-Manager-Icon.png";

function SHCoding() {
    return (
        <div id="shcoding-div">
            <Header />
            <div id="shcoding-content">
                <h1>SH Coding</h1>
                <div>
                    SH Coding ist das Einzelunternehmen unter denen jegliche Softwareprojekte von mir veröffentlicht werden.
                </div>
            </div>
            <div id="shcoding-apps-content">
                <div>
                    <a className="upper-a" href="https://www.poke-base.com" title="Poké-Manager Play Store" target="_blank" rel="noopener noreferrer">
                        <img src={PokeManagerIcon} alt="Poké-Manager Icon"/>
                        <span>Poké-Manager App</span>
                    </a>
                    <a href={RouteNames.shCodingPokeManager} title="Privacy Policy">
                        <span>Privacy Policy</span>
                    </a>
                </div>
                <div>
                    <a className="upper-a" href="https://play.google.com/store/apps/details?id=de.shcoding.countdown" title="Countdowns Play Store" target="_blank" rel="noopener noreferrer">
                        <img src={CountdownsIcon} alt="Countdowns Icon"/>
                        <span>Countdowns App</span>
                    </a>
                    <a href={RouteNames.shCodingCountdowns} title="Privacy Policy">
                        <span>Privacy Policy</span>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SHCoding;
