import { useState, useRef, useEffect } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import createLayout from '../common/justified-layout';
import styles from '../common/style.css';

function Image({
  image,
  index,
  onClick,
  render
}) {

  const { src, alt, scaledWidthPc, scaledHeight } = image;
  const style = {
    width: scaledWidthPc + '%',
    height: scaledHeight + 'px',
  }

  const handleClick = event => {
    onClick(index, event);
  }

  return (
    <div className={`image-masonry-item ${styles['image-masonry-item']}`} style={style} onClick={handleClick}>
      <img src={src} alt={alt} />
      {render && render(image)}
    </div>
  );
}

export default function ImageMasonry({
  images,
  targetRowHeight,
  onImageClick,
  render
}) {

  const element = useRef(null);
  const [state, setState] = useState({
    images: [],
    width: 0
  });

  const handleClick = (index, event) => {
    if (onImageClick) {
      onImageClick(images[index], index, event);
    }
  }

  // re-render on element resize
  const onResize = width => {
    if (Math.round(width) !== Math.round(state.width)) {
      setState({
        images: createLayout(images, width, targetRowHeight),
        width
      });
    }
  }

  // re-render on mount and prop changes
  useEffect(() => {
    const width = element.current.getBoundingClientRect().width;
    setState({
      images: createLayout(images, width, targetRowHeight),
      width
    })
  }, [images, targetRowHeight]);

  return (
    <div className={`image-masonry ${styles['image-masonry']}`} ref={element}>
      <ReactResizeDetector handleWidth refreshMode="debounce" refreshRate={5} skipOnMount onResize={onResize} />
      {state.images.map((image, i) =>
        <Image image={image} index={i} key={image.src} onClick={handleClick} render={render} />
      )}
    </div>
  );

}

ImageMasonry.defaultProps = {
  images: [],
  targetRowHeight: 220
};
