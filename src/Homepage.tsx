import './Homepage.css';
import React from "react";
import MangaSeverin from "./images/MangaSeverin-512.png";
import video from "./images/magic.mp4"
import Header from "./Header";
import Footer from "./Footer";

function Homepage() {
    return (
        <div id="homepage-div">
            <Header/>
            <video id="homepage-video" playsInline={true} autoPlay={true} muted={true} loop={true}>
                    <source src={video} type="video/mp4"/>
            </video>
            <span id="homepage-title">
                <img src={MangaSeverin} alt="Manga Severin"/>
                <div>
                    <h1>Severin Hanke</h1>
                    <span>Mobile Computing-Student & App-Entwickler</span>
                </div>
            </span>
            <Footer/>
        </div>
    );
}

export default Homepage;
