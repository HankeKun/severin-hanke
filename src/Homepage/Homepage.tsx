import "./Homepage.css";
import "./HomepageMedia.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import SeverinWaldalgesheim from "../images/Severin_Waldalgesheim-512.png";
import video from "../images/magic.mp4"

function Homepage() {
    return (
        <div id="homepage-div">
            <Header/>
            <video id="homepage-video" playsInline={true} autoPlay={true} muted={true} loop={true}>
                <source src={video} type="video/mp4"/>
            </video>
            <div id="homepage-content">
                <img src={SeverinWaldalgesheim} alt="Manga Severin"/>
                <div id="homepage-title">
                    <h1>Severin Hanke</h1>
                    <div>Mobile Computing-Student & App-Entwickler</div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Homepage;
