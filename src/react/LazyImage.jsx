import { useState, useEffect, useRef } from 'react';
import whenElementVisible from '../common/when-element-visible';
import cn from './style/classNames';

const cache = {};

export default function LazyImage({
  src,
  srcset,
  alt
}) {
  const element = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    cache[src] = true;
    setIsLoaded(true);
  }

  useEffect(() => {
    if (cache[src]) {
      setIsVisible(true);
      setIsLoaded(true);
      return;
    }

    const disconnect = whenElementVisible(element.current, () => {
      setIsVisible(true);
    });

    return () => {
      disconnect();
    }

  }, [src, srcset]);

  let img = null;
  if (isVisible) {
    const className = cn.image + ' ' + (isLoaded ? cn.isLoaded : '');
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
    <div data-masonry-image ref={element} className={cn.imageContainer + ' ' + (isLoaded ? cn.isLoaded : '')}>
      {img}
    </div>
  )
}
