import "./Header.css";
import "./HeaderMedia.css";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {RouteNames} from "../constants/RouteNames";
import {useTranslation} from "react-i18next";

function Header() {
    const {t} = useTranslation();
    const [open, setOpen] = useState(false);

    function toggleBar() {
        setOpen(current => !current);
    }

    return (
        <header>
            <div id="hamburger-menu"
                 className={open ? "change" : undefined}
                 role="button"
                 tabIndex={0}
                 aria-controls="header-nav"
                 aria-expanded={open}
                 aria-label={t('menu')}
                 onClick={toggleBar}
                 onKeyDown={event => {
                     if (event.key === "Enter" || event.key === " ") {
                         event.preventDefault();
                         toggleBar();
                     }
                 }}>
                <div id="hamburger-menu-bar1"/>
                <div id="hamburger-menu-bar2"/>
                <div id="hamburger-menu-bar3"/>
            </div>
            <nav id="header-nav" className={open ? "change" : undefined} onClick={() => setOpen(false)}>
                <Link to="/">{t('homepage')}</Link>
                <Link to={RouteNames.aboutMe}>{t('aboutMe')}</Link>
                <Link to={RouteNames.links}>{t('links')}</Link>
                {/*<Link to={RouteNames.gallery}>Galerie</Link>*/}
                <Link to={RouteNames.shCoding}>SH Coding</Link>
            </nav>
        </header>
    );
}

export default Header;
