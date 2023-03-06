import "./SHCoding.css";
import "./SHCodingMedia.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import CountdownsIcon from "../images/Apps/Countdowns-Icon.png";

function SHCoding() {
    let openApp = (page: string) => {
        window.open(page, "_blank", "noopener noreferrer");
    }

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
                <img src={CountdownsIcon} alt="Countdowns Icon" onClick={() => openApp("https://play.google.com/store/apps/details?id=de.shcoding.countdown")}/>
                <div>Countdowns App</div>
                <a href="https://countdowns.privacy.severin-hanke.de/" title="Privacy Policy" target="_blank"
                   rel="noopener noreferrer">
                    <span>Privacy Policy</span>
                </a>
            </div>
            <Footer />
        </div>
    );
}

export default SHCoding;