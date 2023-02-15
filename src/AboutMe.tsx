import './AboutMe.css';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function AboutMe() {
    return (
        <div className="AboutMe">
            <Header />
            <div className="aboutme-container">
                <table>
                    <tr>
                        <td><h1 id="h1-aboutme">Über mich</h1></td>
                        <td>
                            <div id="div-aboutme">
                                Hi, ich bin Mobile Computing-Student im Master mit einem großen Interesse an Appentwicklung.
                                Desweiteren liebe ich Pokémon und Wandertouren mit meiner Verlobten 😊
                                Bei Spielen und GitHub bin ich meistens mit dem Namen HankeKun unterwegs.
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <Footer />
        </div>
    );
}

export default AboutMe;
