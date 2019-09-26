import LazyImage from './LazyImage.jsx';
import styles from '../common/image-masonry.less';

export default function ImageMasonry({
  image,
  padding,
  render,
  onClick,
  emitter
}) {

  const { scaledWidth, scaledHeight, isLastInRow, isLastRow, index } = image;

  let mr = padding + 'px';
  const mb = isLastRow ? '0' : mr;
  let flex = `0 0 ${scaledWidth}px`;
  if (isLastInRow) {
    mr = '0';
    flex = `1 1 ${scaledWidth-4}px`;
  }
  const style = {
    height: scaledHeight + 'px',
    flex: flex,
    marginRight: mr,
    marginBottom: mb
  }

  const handleClick = event => {
    onClick(index, event);
  }

  return (
    <div style={style} onClick={handleClick} value={image.index} className={styles['masonry-item']}>
      {render && render(image)}
      <LazyImage
        {...image}
        emitter={emitter}
      />
    </div>
  );
}
