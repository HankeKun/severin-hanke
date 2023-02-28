import "./Header.css";
import "./HeaderMedia.css";
import React from "react";

function Header() {
    function toggleBar() {
        const hamburgerMenu = document.getElementById("hamburger-menu");
        const headerNav = document.getElementById("header-nav");
        if (hamburgerMenu !== null && headerNav !== null) {
            hamburgerMenu.classList.toggle("change");
            headerNav.classList.toggle("change");
        }
    }

    return (
        <header>
            <div id="hamburger-menu" onClick={() => toggleBar()}>
                <div id="hamburger-menu-bar1"/>
                <div id="hamburger-menu-bar2"/>
                <div id="hamburger-menu-bar3"/>
            </div>
            <nav id="header-nav">
                <a href="/">Startseite</a>
                <a href="/about-me">Über mich</a>
                <a href="/Links">Links</a>
                <a href="/Galerie">Galerie</a>
                <a href="/sh-coding">SH Coding</a>
            </nav>
        </header>
    );
}

export default Header;
