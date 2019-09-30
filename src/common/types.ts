interface Image {
  width: number,
  height: number,
  src: string,
  srcset: string,
  alt: string
}

interface ScaledImage extends Image {
  scaledWidth:  number,
  scaledHeight: number,
  scaledWidthPc: number,
  isLastInRow: boolean,
  isLastRow: boolean,
  index: number
}
