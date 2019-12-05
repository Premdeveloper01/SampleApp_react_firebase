import React from 'react';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
}

const showGallery = ({ listImage }) => {
    if (listImage) {
        return (
            <Fade {...fadeProperties}>
                {listImage.map((item) => {
                    return (
                        <div key={item.id} className="each-fade">
                            <div className="image-container">
                                <img src={item.image} alt="house" />
                            </div>
                        </div>
                    )
                })}
            </Fade>
        )
    }
}

const Gallery = (props) => {
    return (
        <div className="home-gallery">
            {showGallery(props)}
        </div>

    )
}

export default Gallery;