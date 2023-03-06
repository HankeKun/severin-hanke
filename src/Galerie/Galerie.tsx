import "./Galerie.css";
import "./GalerieMedia.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";
import {RouteNames} from "../constants/RouteNames";
import {useNavigate} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";

import {ImageInfos} from "../models/ImageInfos";
import BernkastelKuesPlaceholder from "../images/Bernkastel-Kues/placeholder/Bernkastel-Kues-placeholder1-6.jpg";
import BernkastelKues from "../images/Bernkastel-Kues/Bernkastel-Kues1-6.JPG";
import BadKreuznachPlaceholder from "../images/Bad-Kreuznach/placeholder/Bad-Kreuznach-placeholder1-7.jpg";
import BadKreuznach from "../images/Bad-Kreuznach/Bad-Kreuznach1-7.JPG";

const images: ImageInfos[] = [
    {src: BernkastelKues, alt: "Bernkastel-Kues", placeholder: BernkastelKuesPlaceholder, link: RouteNames.galerieBernkastelKues},
    {src: BadKreuznach, alt: "Bad Kreuznach", placeholder: BadKreuznachPlaceholder, link: RouteNames.galerieBadKreuznach},
];

function Galerie() {
    const navigate = useNavigate();
    let openGalerie = (page: string) => {
        navigate(page);
    }

    return (
        <div id="galerie-div">
            <Header/>
            <div id="galerie-content">
                <h1>Galerie</h1>
                <div id="galerie-images">
                    {images.map((image: ImageInfos, index: number) => (
                        <div id="galerie-image-wrapper"
                             key={index}
                             onClick={() => openGalerie(image.link ?? RouteNames.galerie)}
                        >
                            <LazyLoadImage
                                src={image.src}
                                key={index}
                                alt={image.alt}
                                placeholderSrc={image.placeholder}
                                effect="blur"
                                loading="lazy"
                            />
                            <div>
                                {image.alt}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Galerie;