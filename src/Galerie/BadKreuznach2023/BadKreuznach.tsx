import "./BadKreuznach.css";
import "./BadKreuznachMedia.css";
import React, {useCallback, useState} from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ImageViewer from "react-simple-image-viewer";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {imagesBadKreuznach} from "../../constants/ImagesBadKreuznach";

function BadKreuznach() {
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
        <div id="bad-kreuznach-div">
            <Header/>
            <div id="bad-kreuznach-content">
                <h1>Galerie - Bad Kreuznach</h1>
                <div id="bad-kreuznach-images">
                    {imagesBadKreuznach.map((image, index) => (
                        <LazyLoadImage
                            src={image.src}
                            onClick={() => openImageViewer(index)}
                            key={index}
                            alt={image.alt}
                            placeholderSrc={image.placeholder}
                            effect="blur"
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
            <Footer/>

            {isViewerOpen && (
                <ImageViewer
                    src={imagesBadKreuznach.map((image) => image.src)}
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

export default BadKreuznach;