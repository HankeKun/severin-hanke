import "./GalerieItem.css";
import "./GalerieItemMedia.css";
import React, {useCallback, useState} from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ImageViewer from "react-simple-image-viewer";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {ImageInfos} from "../../models/ImageInfos";

function GalerieItem(props: { images: ImageInfos[], title: string }) {
    const [onHover, setOnHover] = useState(true);
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const onMouseEnter = useCallback(() => {
        setOnHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setOnHover(false);
    }, []);

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
                <h1>Galerie - {props.title}</h1>
                <div id="galerie-item-images">
                    {props.images.map((image: ImageInfos, index: number) => (
                        <div id="galerie-item-image-wrapper"
                             key={index}
                             onClick={() => openImageViewer(index)}
                        >
                            <LazyLoadImage
                                src={image.src}
                                key={index}
                                alt={image.alt}
                                placeholderSrc={image.placeholder}
                                effect="blur"
                                loading="lazy"
                                onMouseEnter={() => onMouseEnter()}
                                onMouseLeave={() => onMouseLeave()}
                            />
                            {onHover && (
                                <div>
                                    Hallo
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>

            {isViewerOpen && (
                <ImageViewer
                    src={props.images.map((image: ImageInfos) => image.src)}
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