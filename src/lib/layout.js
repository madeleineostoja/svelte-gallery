import { dijkstra } from './dijkstra';

export function round(n) {
  return Math.round(n * 100 + Number.EPSILON) / 100;
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

function getRowHeight(row, containerWidth, gutter) {
  const rowWidth = containerWidth - (row.length - 1) * gutter;
  const rowAspectRatio = row.reduce((acc, { ratio }) => acc + ratio, 0);
  return scaleHeight(rowWidth, rowAspectRatio);
}

function cost(images, start, end, containerWidth, targetHeight, gutter) {
  const row = images.slice(start, end);
  const rowHeight = getRowHeight(row, containerWidth, gutter);
  return Math.pow(Math.abs(rowHeight - targetHeight), 2);
}

function calcSeekLimit(containerWidth, targetRowHeight) {
  if (containerWidth < 420) {
    // limit to two nodes if the container is narrow
    return 2;
  }

  // find how many 3/4 portrait pictures will fit in an ideal row
  const count = ratio(containerWidth, targetRowHeight) / 0.75;
  return Math.round(count * 1.5);
}

export default function ({
  images,
  containerWidth,
  targetHeight,
  gutter = 2,
  seekLimit = calcSeekLimit,
  byRow = false
} = {}) {
  // clone the images, and set ratio and initial scaled width / height
  const _images = images.map((image, index) => {
    return {
      ...image,
      index,
      ratio: ratio(image.width, image.height)
    };
  });

  const nodeSeekLimit = seekLimit(containerWidth, targetHeight);

  const graph = (start) => {
    const results = {};
    start = +start;
    results[start] = 0;
    for (let i = start + 1; i < _images.length + 1; ++i) {
      if (i - start > nodeSeekLimit) {
        break;
      }
      results['' + i] = cost(
        _images,
        start,
        i,
        containerWidth,
        targetHeight,
        gutter
      );
    }
    return results;
  };

  const path = dijkstra.find_path(graph, '0', _images.length);

  const rows = [];
  const scaledImages = [];
  for (let i = 0; i < path.length; i++) {
    if (path[i + 1]) {
      const row = _images.slice(+path[i], +path[i + 1]);
      const isLastRow = i === path.length - 2;

      // scale row
      const rowHeight = getRowHeight(row, containerWidth, gutter);
      row.forEach((image, index) => {
        image.scaledWidth = scaleWidth(rowHeight, image.ratio); //.toFixed(1);
        image.scaledHeight = rowHeight;
        image.scaledWidthPc = round((image.scaledWidth / containerWidth) * 100);

        if (index === row.length - 1) {
          image.isLastInRow = true;
        }
        image.isLastRow = isLastRow;

        scaledImages.push(image);
      });
      rows.push(row);
    }
  }

  if (byRow) {
    return rows;
  } else {
    return scaledImages;
  }
}
