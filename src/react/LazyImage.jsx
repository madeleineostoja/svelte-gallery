import { useState, useEffect, useRef } from 'react';
import { isInViewport } from '../common/utils';
import styles from '../common/style.css';

const cache = {};

export default function LazyImage({
  src,
  srcset,
  alt,
  emitter
}) {
  const element = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    cache[src] = true;
    setIsLoaded(true);
  }

  useEffect(() => {
    window.emitter = emitter;

    let _isVisible;
    let _isLoaded;

    if (cache[src]) {
      _isVisible = true;
      _isLoaded = true;
      setIsVisible(_isVisible);
      setIsLoaded(_isLoaded);
    }

    if (_isLoaded) {
      return;
    }

    const checkIsVisible = () => {
      if (isInViewport(element.current)) {
        emitter.off('viewportChange', checkIsVisible);
        setIsVisible(true);
      }
    }
    emitter.on('viewportChange', checkIsVisible);
    checkIsVisible();

    return () => {
      emitter.off('viewportChange', checkIsVisible);
    }

  }, [src, srcset]);

  let img = null;
  if (isVisible) {
    const className = styles['lazy-image'] + ' ' + (isLoaded ? styles['is-loaded'] : '');
    img = (
      <img
        src={src}
        srcSet={srcset}
        alt={alt}
        className={className}
        onLoad={handleLoad}
      />
    )
  }
  return (
    <div data-masonry-image ref={element} className={styles['lazy-image-container']}>
      {img}
    </div>
  )
}
