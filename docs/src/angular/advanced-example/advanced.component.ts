import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import images from '../../images-advanced';
import openPhotoSwipe from '../../../photoswipe/index';

import { NgRedux, select } from '@angular-redux/store';
import { ImageActions } from './actions';
import { AppState } from './store';
import { Observable, Subscription } from 'rxjs';

export function shuffleArray(array: any[]) {
  const clone: any[] = [...array];
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

@Component({
  selector: 'advanced-example',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.less']
})
export class AdvancedComponent implements OnInit, OnDestroy {
  constructor(
    private elementRef: ElementRef,
    private ngRedux: NgRedux<AppState>,
    private actions: ImageActions
  ) { }

  @select() readonly images$: Observable<ExampleImage[]>
  @select() readonly selectedImages$: Observable<ExampleImage[]>;

  images: ExampleImage[];
  targetRowHeight = 220;
  subscription: Subscription;

  ngOnInit() {
   this.ngRedux.dispatch(this.actions.set(images));
   this.subscription = this.images$.subscribe(images => {
    this.images = images;
   });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onChangeImages () {
    this.ngRedux.dispatch(this.actions.set(shuffleArray(this.images)));
  }

  onChangeRowHeight() {
    this.targetRowHeight = this.targetRowHeight + 50
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
    openPhotoSwipe(images, index, index => {
      return this.elementRef.nativeElement.querySelector('image-masonry').querySelectorAll('[data-masonry-image]')[index].querySelector('img');
    });
  }

}
