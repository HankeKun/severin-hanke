import "./SHCoding.css";
import "./SHCodingMedia.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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
            <Footer />
        </div>
    );
}

export default SHCoding;