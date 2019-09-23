import { dijkstra } from './dijkstra';
import { round, ratio, scaleHeight, scaleWidth } from '../common/utils';

function getRowHeight(row, containerWidth, padding) {
  const rowWidth = containerWidth - (row.length - 1) * (padding);
  const rowAspectRatio = row.reduce((acc, { ratio }) => acc + ratio, 0);
  return scaleHeight(rowWidth, rowAspectRatio);
}

function cost(images, start, end, containerWidth, targetHeight, padding) {
  const row = images.slice(start, end);
  const rowHeight = getRowHeight(row, containerWidth, padding);
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

export default function({
  images,
  containerWidth,
  targetHeight,
  padding = 2,
  seekLimit = calcSeekLimit,
  byRow = true
} = {}) {

  // clone the images, and set ratio and initial scaled width / height
  const _images = images.map((image, index) => {
    return {
      ...image,
      index,
      ratio: ratio(image.width, image.height)
    }
  });

  const nodeSeekLimit = seekLimit(containerWidth, targetHeight);

  const graph = start => {
    const results = {};
    start = +start;
    results[start] = 0;
    for (let i = start + 1; i < _images.length + 1; ++i) {
      if (i - start > nodeSeekLimit) {
        break;
      }
      results['' + i] = cost(_images, start, i, containerWidth, targetHeight, padding);
    }
    return results;
  }

  const path = dijkstra.find_path(graph, '0', _images.length);

  const rows = [];
  const scaledImages = [];
  for (let i = 0; i < path.length; i++) {
    if (path[i + 1]) {
      const row = _images.slice(+path[i], +path[i + 1]);
      // scale row
      const rowHeight = getRowHeight(row, containerWidth, padding);
      row.forEach(image => {
        image.scaledWidth = scaleWidth(rowHeight, image.ratio); //.toFixed(1);
        image.scaledHeight = rowHeight;
        image.scaledWidthPc = round((image.scaledWidth / containerWidth) * 100);
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
