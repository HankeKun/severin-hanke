import './Galerie.css';
import React, {useCallback, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageViewer from 'react-simple-image-viewer';

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

function Galerie() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const images: { src: string, alt: string }[] = [
        {src: BadKreuznach1, alt: 'Bad Kreuznach 1'},
        {src: BadKreuznach2, alt: 'Bad Kreuznach 2'},
        {src: BadKreuznach3, alt: 'Bad Kreuznach 3'},
        {src: BadKreuznach4, alt: 'Bad Kreuznach 4'},
        {src: BadKreuznach5, alt: 'Bad Kreuznach 5'},
        {src: BadKreuznach6, alt: 'Bad Kreuznach 6'},
        {src: BadKreuznach7, alt: 'Bad Kreuznach 7'},
        {src: BadKreuznach8, alt: 'Bad Kreuznach 8'},
        {src: BadKreuznach9, alt: 'Bad Kreuznach 9'},
        {src: BadKreuznach10, alt: 'Bad Kreuznach 10'},
        {src: BadKreuznach11, alt: 'Bad Kreuznach 11'},
    ];

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
                        <img
                            src={image.src}
                            onClick={() => openImageViewer(index)}
                            key={index}
                            alt={image.alt}
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