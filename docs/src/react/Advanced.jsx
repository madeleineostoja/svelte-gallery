import { useState, useRef } from 'react';
import ImageMasonry from '../../../src/react/ImageMasonry.jsx';
import sampleImages from '../images';
import openPhotoSwipe from '../photoswipe';
import styles from '../style.css';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function ImageDetails(image) {
  return (
    <div className={styles['image-masonry-overlay']}>
      <div className={styles['image-masonry-text']}>{image.title}</div>
    </div>
  )
}

export default function () {

  const [images, setImages] = useState(sampleImages);
  const [rowHeight, setRowHeight] = useState(200);

  const element = useRef(null);

  const handleChangeImagesClick = () => {
    const newArray = [...images];
    shuffleArray(newArray);
    setImages(newArray);
  }

  const handleChangeRowHeightClick = () => {
    setRowHeight(rowHeight + 50);
  }

  const handleImageClick = (image, index) => {
    openPhotoSwipe(images, index, {
      container: element.current,
      selector: '.image-masonry-item'
    });
  }

  return (
    <div>
      <div className="pb-3 text-right">
        <button className="btn btn-light btn-sm" type="button" onClick={handleChangeImagesClick}>Shuffle images</button>&nbsp;
        <button className="btn btn-light btn-sm" type="button" onClick={handleChangeRowHeightClick}>Increase row height</button>
      </div>
      <div ref={element}>
        <ImageMasonry images={images} targetRowHeight={rowHeight} render={ImageDetails} onImageClick={handleImageClick} />
      </div>
    </div>
  )

}
