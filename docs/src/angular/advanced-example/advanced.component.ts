import { Component, ElementRef } from '@angular/core';
import images from '../../images-advanced';
import openPhotoSwipe from '../../photoswipe';

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

@Component({
  selector: 'advanced-example',
  templateUrl: './advanced.component.html',
  styleUrls: ['../../image-details.css']
})
export class AdvancedComponent {
  constructor(private elementRef: ElementRef) { }

  images = images;
  targetRowHeight = 220;

  onChangeImages () {
    const newArray = [...images];
    shuffleArray(newArray);
    this.images = newArray;
  }

  onChangeRowHeight() {
    this.targetRowHeight = this.targetRowHeight + 50
  }

  onImageClick({ index }) {
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
    openPhotoSwipe(images, index, (index) => {
      return this.elementRef.nativeElement.querySelector('image-masonry').querySelectorAll('[data-masonry-image]')[index];
    });
  }

}
