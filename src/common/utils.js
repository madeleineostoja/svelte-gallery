export function ratio(width, height) {
  return height / width;
}

export function scaleHeight(width, ratio) {
  return width * ratio;
}

export function scaleWidth(height, ratio) {
  return height / ratio;
}
