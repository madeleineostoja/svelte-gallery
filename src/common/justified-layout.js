import { dijkstra } from './dijkstra';
import { ratio, scaleWidth, scaleHeight } from './utils';

function getRowHeight(row, containerWidth, targetHeight) {
  const rowWidth = row.reduce((accumulator, { scaledWidth }) => accumulator + scaledWidth, 0);
  return scaleHeight(containerWidth, ratio(rowWidth, targetHeight));
}

function cost(images, start, end, containerWidth, targetHeight) {
  const row = images.slice(start, end);
  const rowHeight = getRowHeight(row, containerWidth, targetHeight);
  return Math.pow(Math.abs(rowHeight - targetHeight), 2);
}

export default function(imgs, containerWidth, targetHeight, seekLimit = 8, byRow = false) {

  // clone the images, and set ratio and initial scaled width / height
  const images = imgs.map(image => {
    const r = ratio(image.width, image.height);
    return {
      ...image,
      ratio: r,
      scaledWidth: scaleWidth(targetHeight, r),
      scaledHeight: targetHeight,
      scaledWidthPc: 0
    }
  });

  const graph = start => {
    const results = {};
    start = +start;
    results[start] = 0;
    for (let i = start + 1; i < images.length + 1; ++i) {
      if (i - start > seekLimit) {
        break;
      }
      results['' + i] = cost(images, start, i, containerWidth, targetHeight);
    }
    return results;
  }

  const path = dijkstra.find_path(graph, '0', images.length);

  const rows = [];
  const scaledImages = [];
  for (let i = 0; i < path.length; i++) {
    if (path[i + 1]) {
      const row = images.slice(+path[i], +path[i + 1]);
      // scale row
      const rowHeight = getRowHeight(row, containerWidth, targetHeight);
      row.forEach(image => {
        image.scaledWidth = scaleWidth(rowHeight, image.ratio)
        image.scaledHeight = rowHeight;
        image.scaledWidthPc = (image.scaledWidth / containerWidth) * 100;
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
