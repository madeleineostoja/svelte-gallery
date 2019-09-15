import { Component } from '@angular/core';
import images from '../../images';

@Component({
  selector: 'basic-example',
  templateUrl: './basic.component.html'
})
export class BasicComponent {
  images = images;
}
