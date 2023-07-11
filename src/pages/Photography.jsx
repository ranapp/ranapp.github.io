import React from 'react';
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "../styles/photography.css";

function Photography() {
  const imageKeys = ["a.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg",
  "18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","30.jpg","31.jpg","32.jpg","33.jpg","34.jpg","35.jpg","36.jpg","37.jpg","38.jpg","39.jpg"]; // Add your image file names here

  return (
    <div className='gallery'>
      <Gallery>
        {imageKeys.map((imageKey) => (
          <Item
            key={imageKey}
            original={`/images/${imageKey}`} 
            thumbnail={`/images/${imageKey}`} 
            width="600"
            height="500"
          >
            {({ ref, open }) => (
              <img className="gallery-thumbnail" ref={ref} onClick={open} src={`/images/${imageKey}`} alt="" />
            )}
          </Item>
        ))}
      </Gallery>
    </div>
  );
}

export default Photography;
