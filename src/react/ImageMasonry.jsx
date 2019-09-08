import React, { useState, useRef, useEffect } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import createLayout from '../common/justified-layout';

function Image({
  image,
  index,
  onClick
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
    <div className="image-masonry-item" style={style} onClick={handleClick}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default function ImageMasonry({
  images,
  targetRowHeight,
  onClick
}) {

  const element = useRef(null);
  const [state, setState] = useState({
    images: [],
    width: 0
  });

  const handleClick = (index, event) => {
    if (onClick) {
      onClick(images[index], index, event);
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
    <div className="image-masonry" ref={element}>
      <ReactResizeDetector handleWidth refreshMode="debounce" refreshRate={5} skipOnMount onResize={onResize} />
      {state.images.map((image, i) =>
        <Image image={image} index={i} key={image.src} onClick={handleClick} />
      )}
    </div>
  );

}

ImageMasonry.defaultProps = {
  images: [],
  targetRowHeight: 220
};
