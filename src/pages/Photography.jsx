import React, { useRef } from 'react';
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "../styles/photography.css";

function Photography() {
  const imageKeys = [
    '1050245.JPG', '1050275.JPG', '1050298.JPG', '1050325.JPG', '1050380.JPG', '1050542.JPG', '1050601.JPG',
    '1050608.JPG', '1050646.JPG', '1050704.JPG', '1050808 2.JPG', '1050863.JPG', '1050867_VSCO.JPG', '1050951.JPG',
    '1050955.jpg', '1050962.JPG', '1050970.JPG', '1050979.jpg', '1050994.jpg', '1060005.JPG', '1060015.JPG',
    '1060057.JPG', '349CB4D1-73C2-483E-AD39-4BDD32B851BC.JPG', 'A920CD76-946C-4B85-A266-D46944B6CC63.JPG',
    'E1EAC9A1-6881-47CE-B7CA-791D59A93643.JPG', 'IMG_1038 2.JPG', 'IMG_1065.JPG', 'img_2.jpg',
    'img_27.jpg', 'img_29.jpg',
    'tour2.jpg', 'tour.jpg', 'ben1.jpg', 'stones.jpg', 'tower.jpg', 'arc.jpg', 'bridge.jpg',
    'ben2.jpg', 'img_39.jpg', 'img_38.jpg', 'img_37.jpg', 'img_35.jpg', 'img_34.jpg', 'img_28.jpg',
    'img_26.jpg', 'img_7.jpg', 'img_22.jpg', 'img_6.jpg', 'img_18.jpg', 'img_17.jpg', 'img_15.jpg',
    'img_13.jpg', 'img_14.jpg', 'img_11.jpg', 'img_12.jpg', 'img_16.jpg', 'img_8.jpg', 'img_5.jpg',
  ];

  const width = [
    '538', '717', '538', '717', '538', '717', '717', '717', '717', '717',
    '717', '538', '538', '717', '538', '538', '538', '717', '538', '717',
    '717', '538', '538', '717', '645', '717', '717', '717',
    '420', '420', '462', '717', '574', '420', '717', '717', '717', '717',
    '717', '717', '717', '717', '717', '574', '717', '462', '717', '717',
    '717', '717', '717', '717', '717', '717', '717', '717',
  ];

  const height = [
    '717', '717', '717', '538', '717', '538', '538', '539', '538', '538',
    '538', '717', '717', '538', '717', '717', '717', '538', '717', '538',
    '538', '717', '717', '470', '717', '538', '539', '496',
    '538', '538', '538', '538', '615', '538', '538', '538', '538', '538',
    '538', '538', '538', '538', '538', '615', '538', '615', '538', '538',
    '538', '538', '538', '538', '538', '538', '538', '538',
  ];

  const galleryRef = useRef(null);

  const handleOpen = () => {
    galleryRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="gallery site-container site-container--gallery" ref={galleryRef}>
      <Gallery>
        {imageKeys.map((imageKey, index) => {
          const imagePath = `/images/${encodeURIComponent(imageKey)}`;
          return (
            <Item
              className="img-gallery"
              key={imageKey}
              id={imageKey}
              original={imagePath}
              thumbnail={imagePath}
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
                  src={imagePath}
                  alt=""
                />
              )}
            </Item>
          );
        })}
      </Gallery>
    </div>
  );
}

export default Photography;
