import styles from '../common/style.css';
import LazyImage from './LazyImage.jsx';

export default function ImageMasonry({
  image,
  padding,
  render,
  onClick,
  emitter
}) {

  const { scaledWidth, scaledHeight, index } = image;

  const style = {
    width: scaledWidth + 'px',
    height: scaledHeight + 'px',
    marginRight: padding + 'px'
  }

  const handleClick = event => {
    onClick(index, event);
  }

  return (
    <div style={style} onClick={handleClick} value={image.index} className={styles['masonry-item']}>
      <LazyImage
        {...image}
        emitter={emitter}
      />
      {render && render(image)}
    </div>
  );
}
