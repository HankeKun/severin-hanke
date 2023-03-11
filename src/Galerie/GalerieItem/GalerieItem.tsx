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
    const [onHoverIndex, setOnHoverIndex] = useState(-1);
    const [currentImage, setCurrentImage] = useState(-1);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const onMouseEnter = (index: React.SetStateAction<number>) => {
        setOnHoverIndex(index);
        setOnHover(true);
    };

    const onMouseLeave = () => {
        setOnHoverIndex(-1);
        setOnHover(false);
    };

    const openImageViewer = useCallback((index: React.SetStateAction<number>) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(-1);
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
                             onMouseEnter={() => onMouseEnter(index)}
                             onMouseLeave={() => onMouseLeave()}
                        >
                            <LazyLoadImage
                                src={image.src}
                                key={index}
                                alt={image.alt}
                                placeholderSrc={image.placeholder}
                                effect="blur"
                                loading="lazy"
                            />
                            {onHover && index === onHoverIndex && (
                                <div>
                                    {image.aufnahmeDatum}
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