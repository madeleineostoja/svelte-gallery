import { useState, useRef, useEffect } from 'react';
import ImageMasonry from '../../../src/react/ImageMasonry.jsx';
import ImageOverlay from './components/ImageOverlay.jsx';
import sampleImages from '../images-advanced';
import openPhotoSwipe from '../photoswipe';
import { shuffleArray } from '../utils';

export default function () {

  const [images, setImages] = useState(sampleImages);
  const [rowHeight, setRowHeight] = useState(220);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);


  const element = useRef(null);

  const handleChangeImagesClick = () => {
    setImages(shuffleArray(images));
  }

  const handleChangeRowHeightClick = () => {
    setRowHeight(rowHeight + 50);
  }

  const handleSelectChange = (value, index) => {
    if (value) {
      setSelectedImages([...selectedImages, images[index]]);
    } else {
      const removeIndex = selectedImages.indexOf(images[index]);
      selectedImages.splice(removeIndex, 1);
      setSelectedImages([...selectedImages]);
    }
  }

  useEffect(() => {
    setIsSelecting(!!selectedImages.length);
  }, [selectedImages]);

  const handleImageView = (index) => {
    // create array compatible with PhotoSwipe
    const imgs = images.map(({ src, width, height, original, title }) => {
      return {
        src: original,
        msrc: src,
        w: width,
        h: height,
        title
      }
    });
    openPhotoSwipe(imgs, index, (index) => {
      return element.current.querySelectorAll('[data-masonry-image]')[index].querySelector('img');
    });
  }

  return (
    <div>
      <div className="pb-3 text-right">
        <button className="btn btn-light btn-sm" type="button" onClick={handleChangeImagesClick}>Shuffle images</button>&nbsp;
        <button className="btn btn-light btn-sm" type="button" onClick={handleChangeRowHeightClick}>Increase row height</button>
      </div>
      <div ref={element}>
        <ImageMasonry images={images} targetRowHeight={rowHeight} render={image => (
          <ImageOverlay image={image} selectMode={isSelecting} onSelectChange={handleSelectChange} onView={handleImageView} />
        )}/>
      </div>
    </div>
  )

}
