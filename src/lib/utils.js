if (Number.EPSILON === undefined) {
  Number.EPSILON = Math.pow(2, -52);
}

export function round(n) {
  return Math.round(n * 100 + Number.EPSILON) / 100
}

export function ratio(width, height) {
  return round(width / height);
}

export function scaleHeight(width, ratio) {
  return round(width / ratio);
}

export function scaleWidth(height, ratio) {
  return round(height * ratio);
}

