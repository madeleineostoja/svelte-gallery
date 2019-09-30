import { Component, AfterContentInit, Input, ElementRef, ChangeDetectorRef, HostBinding } from '@angular/core';
import whenElementVisible from '../../common/when-element-visible';

const cache = {};

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.less'],
  host: { 'class': 'lazy-image-container', 'data-masonry-image': '' }
})
export class LazyImageComponent implements AfterContentInit {
  constructor(private elementRef: ElementRef, private changeDetectorRef: ChangeDetectorRef) {}

  @Input() src: string;
  @Input() srcset: string;
  @Input() alt: string;

  @HostBinding('class.is-loaded') isLoaded:boolean = false;
  isVisible = false;
  _observer_disconnect = null;

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

    this._observer_disconnect = whenElementVisible(this.elementRef.nativeElement, () => {
      this.isVisible = true;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy() {
    this._observer_disconnect && this._observer_disconnect();
  }
}
