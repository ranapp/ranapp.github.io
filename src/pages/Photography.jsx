import React, { useRef } from 'react';
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "../styles/photography.css";

function Photography() {
  const imageKeys = ['tour2.jpg', 'sam2.jpg', 'tour.jpg','sam3.jpg','ben1.jpg',  'meg2.jpg',  'stones.jpg','meg1.jpg', 'tower.jpg',
  'arc.jpg', 'bridge.jpg',   'ben2.jpg', 'sam1.jpg','img_39.jpg', 'img_38.jpg', 'img_37.jpg', 'img_36.jpg', 'img_35.jpg', 'img_34.jpg', 'img_33.jpg', 'img_32.jpg', 
  'img_30.jpg', 'img_31.jpg', 'img_28.jpg', 'img_25.jpg', 'img_26.jpg', 'img_7.jpg', 'img_24.jpg', 'img_22.jpg', 'img_23.jpg', 
  'img_6.jpg', 'img_21.jpg', 'img_20.jpg', 'img_19.jpg', 'img_18.jpg', 'img_17.jpg', 'img_9.jpg', 'img_15.jpg', 'img_4.jpg', 
  'img_13.jpg', 'img_14.jpg', 'img_10.jpg', 'img_11.jpg', 'img_12.jpg', 'img_16.jpg', 'img_8.jpg',  'img_5.jpg', 'img_3.jpg',  'a.jpg'];

  const width = ['420','420','420','420','462','420','717','420','574','420','717','717','420',
  '717', '717', '717', '462', '717', '717', '462', '717', '717', '717', '717', '462', '717', '574', 
  '717', '717', '462', '462', '717', '717', '717', '717', '717', '717', '717', '462', '717', '717',
   '717', '717', '717', '717', '717', '717', '462', '717']

  const height = ['538','538','538','538','538','538','538','538','615','538','538','538','538',
  '538', '538', '538', '615', '538', '538', '615', '538', '538', '538', '538', '615', '538', '615', 
  '538', '538', '615', '615', '538', '538', '538', '538', '538', '538', '538', '615', '538', '538', 
  '538', '538', '538', '538', '538', '538', '615',  '538']

  const galleryRef = useRef(null);

  const handleOpen = () => {
    // Scroll the gallery element into view when the image is clicked
    galleryRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='gallery' ref={galleryRef}>
      <Gallery>
        {imageKeys.map((imageKey, index) => (
          <Item
            className="img-gallery"
            key={imageKey}
            id={imageKey}
            original={`/images/${imageKey}`}
            thumbnail={`/images/${imageKey}`}
            width={width[index]}
            height={height[index]}
          >
            {({ ref, open }) => (
              <img
                className="gallery-thumbnail"
                ref={ref}
                onClick={() => {
                  handleOpen();
                  open();
                }}
                src={`/images/${imageKey}`}
                alt=""
              />
            )}
          </Item>
        ))}
      </Gallery>
    </div>
  );
}

export default Photography;
