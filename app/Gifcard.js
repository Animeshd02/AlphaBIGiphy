// components/GifCard.js

import styles from '../public/main.module.css';
import React from 'react';
import Image from 'next/image'
const GifCard = ({ gif, onAddToFavorites }) => {
  return (
    <>
    {/* <h1>fsnjh</h1> */}
    <div className={styles.gifCard}>
      
      <Image src={gif.images.fixed_height.url} width="500" height="200" alt={gif.title} />
      <div className={styles.overlay}>
        <button onClick={() => onAddToFavorites(gif)}>
          <span role="img" aria-label="heart">
            ❤
          </span>
          {/* hekhf */}
        </button>
      </div>
    </div>
    </>
  );
};

export default GifCard;