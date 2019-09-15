import { Component } from '@angular/core';
import images from '../../images';
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
  images = images;
  targetRowHeight = 200;

  onChangeImages () {
    const newArray = [...images];
    shuffleArray(newArray);
    this.images = newArray;
  }

  onChangeRowHeight() {
    this.targetRowHeight = this.targetRowHeight + 50
  }

  onImageClick({ index }) {
    openPhotoSwipe(this.images, index, {
      container: document.body,
      selector: '.image-masonry-item'
    });
  }

}
