import { useState, useRef, useEffect } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import MasonryItem from './MasonryItem.jsx';
import createLayout from '../common/justified-layout';
import { debounce } from '../common/utils';
import styles from '../common/style.css';

export default function ImageMasonry({
  images,
  targetRowHeight,
  onImageClick,
  padding,
  render
}) {
  const element = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [state, setState] = useState({
    images: [],
    width: 0
  });
  const containerStyle = { width: state.width + 'px' };
  const isResizingClassName = isResizing ? styles['is-resizing'] : '';

  const handleClick = (index, event) => {
    if (onImageClick) {
      onImageClick(images[index], index, event);
    }
  }

  // re-render on element resize
  const resizedFinished = debounce(() => {
    setIsResizing(false);
  }, 100);
  const onResize = width => {
    if (Math.round(width) !== Math.round(state.width)) {
      setIsResizing(true);
      setState({
        images: createLayout({
          images,
          containerWidth: width,
          targetHeight: targetRowHeight,
          padding: padding
        }),
        width
      });
      resizedFinished();
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
    <div className={styles['image-masonry'] + ' ' + isResizingClassName} ref={element}>
      <ReactResizeDetector
        handleWidth
        skipOnMount
        onResize={onResize}
      />
      <div className={styles['image-masonry-container']} style={containerStyle}>
        {state.images.map(image =>
          <MasonryItem key={image.src} image={image} onClick={handleClick} padding={padding} render={render} />
        )}
      </div>
    </div>
  );

}

ImageMasonry.defaultProps = {
  images: [],
  targetRowHeight: 220,
  padding: 4
};
