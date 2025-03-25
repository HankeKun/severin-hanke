import "./Header.css";
import "./HeaderMedia.css";
import React from "react";
import {RouteNames} from "../constants/RouteNames";
import {useTranslation} from "react-i18next";

function Header() {
    const {t} = useTranslation();

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
                <a href="/">{t('homepage')}</a>
                <a href={RouteNames.aboutMe}>{t('aboutMe')}</a>
                <a href={RouteNames.links}>{t('links')}</a>
                {/*<a href={RouteNames.gallery}>Galerie</a>*/}
                <a href={RouteNames.shCoding}>SH Coding</a>
            </nav>
        </header>
    );
}

export default Header;
