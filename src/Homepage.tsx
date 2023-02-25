import "./Homepage.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import MangaSeverin from "./images/MangaSeverin-512.png";
import video from "./images/magic.mp4"

function Homepage() {
    return (
        <div id="homepage-div">
            <Header/>
            <video id="homepage-video" playsInline={true} autoPlay={true} muted={true} loop={true}>
                <source src={video} type="video/mp4"/>
            </video>
            <div id="homepage-content">
                <img src={MangaSeverin} alt="Manga Severin"/>
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
