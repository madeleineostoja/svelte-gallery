import { Component, ElementRef } from '@angular/core';
import images from '../../images-advanced';
import openPhotoSwipe from '../../../photoswipe/index';

export function shuffleArray(array: any[]) {
  const clone: any[] = [...array];
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

interface ExampleImage extends Image {
  original: string,
  title: string
}

@Component({
  selector: 'advanced-example',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.less']
})
export class AdvancedComponent {
  constructor(private elementRef: ElementRef) { }

  images: ExampleImage[] = images;
  targetRowHeight = 220;
  selectedImages = [];
  isSelecting = false;

  onChangeImages () {
    this.images = shuffleArray(this.images);
  }

  onChangeRowHeight() {
    this.targetRowHeight = this.targetRowHeight + 50
  }

  onSelect({ value, index } : { value: boolean, index: number }) {
    if (value) {
      this.selectedImages.push(this.images[index]);
    } else {
      const removeIndex = this.selectedImages.indexOf(this.images[index]);
      this.selectedImages.splice(removeIndex, 1);
    }
    this.isSelecting = !!this.selectedImages.length;
  }

  onImageView(index: number) {
    // create array compatible with PhotoSwipe
    const images = this.images.map(({ src, width, height, original, title }) => {
      return {
        src: original,
        msrc: src,
        w: width,
        h: height,
        title
      }
    });
    openPhotoSwipe(images, index, (index: number) => {
      return this.elementRef.nativeElement.querySelector('image-masonry').querySelectorAll('[data-masonry-image]')[index].querySelector('img');
    });
  }

}
