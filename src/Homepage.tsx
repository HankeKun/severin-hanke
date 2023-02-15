import './Homepage.css';
import React from "react";
import MangaSeverin from "./images/MangaSeverin-512.png";
import video from "./images/magic.mp4"
import Header from "./Header";
import Footer from "./Footer";

function Homepage() {
    // make picture rounded
    return (
        <div className="Homepage">
            <Header />
            <div className="video-header">
                <video id="video" playsInline={true} autoPlay={true} muted={true} loop={true}>
                    <source src={video} type="video/mp4" />
                </video>
                <div className="title-container" >
                    <table>
                        <tr>
                            <td><img id="image-severin" src={MangaSeverin} /></td>
                            <td id="black-background">
                                <h1 id="h1-title">Severin Hanke</h1>
                                <div id="div-title">Mobile Computing-Student & App-Entwickler</div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;
