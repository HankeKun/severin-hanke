import "./GalerieItem.css";
import "./GalerieItemMedia.css";
import React, {useCallback, useState} from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ImageViewer from "react-simple-image-viewer";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {ImageInfos} from "../../models/ImageInfos";

function GalerieItem(images: ImageInfos[], title: string) {
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
        <div id="galerie-item-div">
            <Header/>
            <div id="galerie-item-content">
                <h1>Galerie - {title}</h1>
                <div id="galerie-item-images">
                    {images.map((image: ImageInfos, index: number) => (
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
                    src={images.map((image: ImageInfos) => image.src)}
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

export default GalerieItem;