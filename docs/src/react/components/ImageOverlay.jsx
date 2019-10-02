import { useState, useEffect } from 'react';
import Checkbox from './Checkbox.jsx';
import cn from '../style/classNames';

export default function ImageOverlay({
  image,
  selectMode,
  onSelectChange,
  onView
}) {

  const [isSelected, setIsSelected] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const handleChange = value => {
    setIsSelected(value);
  }
  const handleClick = () => {
    if (selectMode) {
      setIsSelected(!isSelected);
    } else {
      onView(image.index);
    }
  }
  const handleMagnifyClick = e => {
    e.stopPropagation();
    onView(image.index);
  }

  useEffect(() => {
    onSelectChange(isSelected, image.index);
  }, [isSelected]);

  const classNames = [cn.imageOverlay];
  isSelected && classNames.push(cn.isSelected);
  selectMode && classNames.push(cn.selectMode);

  return (
    <div className={classNames.join(' ')} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Checkbox
        className={cn.imageCheckbox}
        highlight={selectMode}
        hover={isHovering}
        onChange={handleChange}
        checked={isSelected}
      />
      <button type="button" onClick={handleMagnifyClick} className={cn.imageMagnify} >
        <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm1-7.5h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path></svg>
      </button>
    </div>
  )
}
