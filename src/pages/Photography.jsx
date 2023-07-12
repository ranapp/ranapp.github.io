import React from 'react';
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "../styles/photography.css";

function Photography() {
  const imageKeys=['img_39.jpg', 'img_38.jpg', 'img_37.jpg', 'img_36.jpg', 'img_35.jpg', 'img_34.jpg', 'img_33.jpg', 'img_32.jpg', 'img_30.jpg', 'img_31.jpg', 'img_28.jpg',  'img_25.jpg', 'img_26.jpg','img_24.jpg','img_22.jpg', 'img_23.jpg', 'img_6.jpg', 'img_21.jpg', 'img_20.jpg', 'img_19.jpg', 'img_18.jpg', 'img_17.jpg', 'z.jpg', 'img_15.jpg', 'img_4.jpg', 'img_13.jpg', 'img_14.jpg', 'img_10.jpg', 'img_11.jpg', 'img_12.jpg','img_16.jpg', 'img_8.jpg', 'img_7.jpg',  'img_5.jpg',  'img_3.jpg', 'img_2.jpg', 'a.jpg'];
  const width = ['600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px', '600px'];
  const height =['500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px', '500px'];
  console.log(imageKeys);
  return (
    <div className='gallery'>
      <Gallery>
        {imageKeys.map((imageKey, index) => (
          <Item
            className = "img-gallery"
            key={imageKey}
            id={imageKey}
            original={`/images/${imageKey}`} 
            thumbnail={`/images/${imageKey}`} 
            width={width[index]}
            height={height[index]}
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
