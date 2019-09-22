import { Component, Input, OnInit, OnChanges, OnDestroy, ElementRef, ChangeDetectorRef, SimpleChanges, ContentChild, TemplateRef, EventEmitter, Output } from '@angular/core';
import createLayout from '../common/justified-layout.js';
import elementResizeEvent, { unbind } from 'element-resize-event';
import getEmitter from '../common/emitter';

@Component({
  selector: 'image-masonry',
  templateUrl: './image-masonry.component.html',
  styleUrls: ['./image-masonry.component.css', '../common/style.css']
})
export class ImageMasonryComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private elementRef: ElementRef, private changeDetectorRef: ChangeDetectorRef) { }
  @Output() imageClick: EventEmitter<any> = new EventEmitter();
  @ContentChild('imageDetails', { static: false }) imageDetailsTmpl: TemplateRef<any>;
  @Input() images: any[];
  @Input() targetRowHeight: number = 220;
  @Input() padding: number = 4;

  scaledImages = [];
  width = 0;
  emitter = getEmitter();

  ngOnInit() {
    const el = this.elementRef.nativeElement;
    elementResizeEvent(this.elementRef.nativeElement, () => {
      if (Math.round(this.width) !== Math.round(el.getBoundingClientRect().width)) {
        this.process();
        this.emitter.emit('viewportChange');
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.images || changes.targetRowHeight) {
      this.process();
    }
  }

  ngOnDestroy() {
    unbind(this.elementRef.nativeElement);
  }

  process() {
    this.width = this.elementRef.nativeElement.getBoundingClientRect().width;
    this.scaledImages = createLayout({
      images: this.images,
      containerWidth: this.width,
      targetHeight: this.targetRowHeight,
      padding: this.padding
    })
  }

  makeStyle({ scaledWidth, scaledHeight }) {
    return {
      width: scaledWidth + 'px',
      height: scaledHeight + 'px',
      'margin-right': this.padding + 'px'
    }
  }

  onClick(index: number, event: any) {
    this.imageClick.emit({
      image: this.images[index],
      index,
      event
    });
  }

  identify(index, item) {
    if(item instanceof Array) {
      return index;
    } else {
      return item.src;
    }
  }
}
