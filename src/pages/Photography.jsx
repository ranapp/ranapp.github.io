import React from 'react';
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "../styles/photography.css";

function Photography() {
  const imageKeys=['39.jpg', '38.jpg', '37.jpg', '36.jpg', '35.jpg', '34.jpg', '33.jpg', '32.jpg', '30.jpg', '31.jpg', '28.jpg',  '25.jpg', '26.jpg','24.jpg','22.jpg', '23.jpg', '6.jpg', '21.jpg', '20.jpg', '19.jpg', '18.jpg', '17.jpg', '16.jpg', '15.jpg', '14.jpg', '13.jpg', '12.jpg', '11.jpg', '10.jpg','9.jpg', '8.jpg', '7.jpg',  '5.jpg', '4.jpg', '3.jpg', '2.jpg', 'a.jpg']
  return (
    <div className='gallery'>
      <Gallery>
        {imageKeys.map((imageKey) => (
          <Item
            key={imageKey}
            original={`/images/${imageKey}`} 
            thumbnail={`/images/${imageKey}`} 
            width="auto"
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
