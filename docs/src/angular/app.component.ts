import { Component } from '@angular/core';
import images from '../images';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-image-masonry';
  images = images;
  targetRowHeight = 200;

  onChangeImages () {
    const newArray = [...images];
    shuffleArray(newArray);
    this.images = newArray;
  }

  onChangeRowHeight() {
    this.targetRowHeight = this.targetRowHeight + 20
  }

}
