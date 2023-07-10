import React from 'react';
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "../styles/photography.css";

// Import all images from the images folder
const images = require.context('../images', false, /\.(jpg)$/);
const imageKeys = images.keys();

function Photography() {
    console.log(imageKeys);
   
    return (
        <div className='gallery'>
            <Gallery>
                {imageKeys.map((imageKey) => (
                    <Item
                        key={imageKey}
                        original={images(imageKey).default}
                        thumbnail={images(imageKey).default}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <img className="gallery-thumbnail" ref={ref} onClick={open} src={images(imageKey).default} alt=''/>
                        )}
                    </Item>
                ))}
            </Gallery>
        </div>
    );
}

export default Photography;
