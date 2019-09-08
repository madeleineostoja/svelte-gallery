import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageMasonry from '../../../src/react/ImageMasonry.jsx';
import sampleImages from '../images';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function () {

  const [images, setImages] = useState(sampleImages);
  const [rowHeight, setRowHeight] = useState(180);

  const handleChangeImagesClick = () => {
    const newArray = [...images];
    shuffleArray(newArray);
    setImages(newArray);
  }

  const handleChangeRowHeightClick = () => {
    setRowHeight(rowHeight + 20);
  }

  return (
    <div>
      <button type="button" onClick={handleChangeImagesClick}>Change images</button>
      <button type="button" onClick={handleChangeRowHeightClick}>Change row height</button>
      <ImageMasonry images={images} targetRowHeight={rowHeight} />
    </div>
  )

}
