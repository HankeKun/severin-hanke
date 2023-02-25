import "./Galerie.css";
import React, {useCallback, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageViewer from "react-simple-image-viewer";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import BadKreuznach1Placeholder from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-1-placeholder.jpg";
import BadKreuznach2Placeholder from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-2-placeholder.jpg";
import BadKreuznach3Placeholder from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-3-placeholder.jpg";
import BadKreuznach4Placeholder from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-4-placeholder.jpg";
import BadKreuznach5Placeholder from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-5-placeholder.jpg";
import BadKreuznach6Placeholder from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-6-placeholder.jpg";
import BadKreuznach7Placeholder from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-7-placeholder.jpg";
import BadKreuznach8Placeholder from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-8-placeholder.jpg";
import BadKreuznach9Placeholder from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-9-placeholder.jpg";
import BadKreuznach10Placeholder from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-10-placeholder.jpg";
import BadKreuznach11Placeholder from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-11-placeholder.jpg";
import BadKreuznach1 from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-1.JPG";
import BadKreuznach2 from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-2.JPG";
import BadKreuznach3 from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-3.JPG";
import BadKreuznach4 from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-4.JPG";
import BadKreuznach5 from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-5.JPG";
import BadKreuznach6 from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-6.JPG";
import BadKreuznach7 from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-7.JPG";
import BadKreuznach8 from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-8.JPG";
import BadKreuznach9 from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-9.JPG";
import BadKreuznach10 from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-10.JPG";
import BadKreuznach11 from "./images/2023_Bad-Kreuznach/Bad-Kreuznach-11.JPG";

const images: { src: string, alt: string, placeholder: string }[] = [
    {src: BadKreuznach1, alt: "Bad Kreuznach 1", placeholder: BadKreuznach1Placeholder},
    {src: BadKreuznach2, alt: "Bad Kreuznach 2", placeholder: BadKreuznach2Placeholder},
    {src: BadKreuznach3, alt: "Bad Kreuznach 3", placeholder: BadKreuznach3Placeholder},
    {src: BadKreuznach4, alt: "Bad Kreuznach 4", placeholder: BadKreuznach4Placeholder},
    {src: BadKreuznach5, alt: "Bad Kreuznach 5", placeholder: BadKreuznach5Placeholder},
    {src: BadKreuznach6, alt: "Bad Kreuznach 6", placeholder: BadKreuznach6Placeholder},
    {src: BadKreuznach7, alt: "Bad Kreuznach 7", placeholder: BadKreuznach7Placeholder},
    {src: BadKreuznach8, alt: "Bad Kreuznach 8", placeholder: BadKreuznach8Placeholder},
    {src: BadKreuznach9, alt: "Bad Kreuznach 9", placeholder: BadKreuznach9Placeholder},
    {src: BadKreuznach10, alt: "Bad Kreuznach 10", placeholder: BadKreuznach10Placeholder},
    {src: BadKreuznach11, alt: "Bad Kreuznach 11", placeholder: BadKreuznach11Placeholder},
];

function Galerie() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index: React.SetStateAction<number>) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div id="galerie-div">
            <Header/>
            <div id="galerie-content">
                <h1>Galerie</h1>
                <div id="galerie-images">
                    {images.map((image, index) => (
                        <LazyLoadImage
                            src={image.src}
                            onClick={() => openImageViewer(index)}
                            key={index}
                            alt={image.alt}
                            placeholderSrc={image.placeholder}
                            effect="blur"
                        />
                    ))}
                </div>
            </div>
            <Footer/>

            {isViewerOpen && (
                <ImageViewer
                    src={images.map((image) => image.src)}
                    currentIndex={currentImage}
                    disableScroll={true}
                    closeOnClickOutside={true}
                    backgroundStyle={{backgroundColor: "rgba(0, 0, 0, 0.9)"}}
                    onClose={closeImageViewer}
                />
            )}
        </div>
    );
}

export default Galerie;