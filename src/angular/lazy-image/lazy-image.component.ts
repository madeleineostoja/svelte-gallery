import { Component, AfterContentInit, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
import { isInViewport } from '../../common/utils';

const cache = {};

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['../../common/lazy-image.css'],
  host: { 'class': 'lazy-image-container', 'data-masonry-image': '' }
})
export class LazyImageComponent implements AfterContentInit {
  constructor(private elementRef: ElementRef, private changeDetectorRef: ChangeDetectorRef) {}

  @Input() src: string;
  @Input() srcset: string;
  @Input() alt: string;
  @Input() emitter: object;

  isLoaded = false;
  isVisible = false;
  _lazy_image_check = null;

  onLoad() {
    cache[this.src] = true;
    this.isLoaded = true;
    this.changeDetectorRef.detectChanges();
  }

  ngAfterContentInit() {
    if (cache[this.src]) {
      this.isVisible = true;
      this.isLoaded = true;
    }

    if (this.isLoaded) {
      return;
    }

    const checkIsVisible = () => {
      if (isInViewport(this.elementRef.nativeElement)) {
        this.emitter.off('viewportChange', checkIsVisible);
        this.isVisible = true;
      }
    }
    this.emitter.on('viewportChange', checkIsVisible);
    checkIsVisible();
    this._lazy_image_check = checkIsVisible;
  }

  ngOnDestroy() {
    this.emitter.off('viewportChange', this._lazy_image_check);
  }

}
