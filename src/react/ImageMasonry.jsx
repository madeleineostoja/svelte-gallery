import { useState, useRef, useEffect } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import MasonryItem from './MasonryItem.jsx';
import createLayout from '../common/justified-layout';
import styles from '../common/style.css';

export default function ImageMasonry({
  images,
  targetRowHeight,
  onImageClick,
  padding,
  render
}) {
  const element = useRef(null);
  const [state, setState] = useState({
    images: [],
    width: 0
  });
  const rowStyle = { marginBottom: padding + 'px' };

  const handleClick = (index, event) => {
    if (onImageClick) {
      onImageClick(images[index], index, event);
    }
  }

  // re-render on element resize
  const onResize = width => {
    if (Math.round(width) !== Math.round(state.width)) {
      setState({
        images: createLayout({
          images,
          containerWidth: width,
          targetHeight: targetRowHeight,
          padding: padding
        }),
        width
      });
    }
  }

  // re-render on mount and prop changes
  useEffect(() => {
    const width = element.current.getBoundingClientRect().width;
    setState({
      images: createLayout({
        images,
        containerWidth: width,
        targetHeight: targetRowHeight,
        padding: padding
      }),
      width
    })
  }, [images, targetRowHeight]);

  return (
    <div className={styles['image-masonry']} ref={element}>
      <ReactResizeDetector
        handleWidth
        refreshMode="debounce"
        refreshRate={5}
        skipOnMount
        onResize={onResize}
      />
      {state.images.map((row, i) =>
        <div className={styles['masonry-row']} key={i} style={rowStyle}>
          {row.map(image =>
            <MasonryItem key={image.src} image={image} onClick={handleClick} padding={padding} render={render} />
          )}
        </div>
      )}
    </div>
  );

}

ImageMasonry.defaultProps = {
  images: [],
  targetRowHeight: 220,
  padding: 4
};
