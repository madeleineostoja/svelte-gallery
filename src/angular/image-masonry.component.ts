import { Component, Input, OnInit, OnChanges, OnDestroy, ElementRef, ChangeDetectorRef, SimpleChanges, ContentChild, TemplateRef, EventEmitter, Output } from '@angular/core';
import createLayout from '../common/justified-layout.js';
import elementResizeEvent, { unbind } from 'element-resize-event';

@Component({
  selector: 'image-masonry',
  templateUrl: './image-masonry.component.html',
  styleUrls: ['./image-masonry.component.css', '../common/style.css']
})
export class ImageMasonryComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private elementRef: ElementRef, private changeDetectorRef: ChangeDetectorRef) { }
  @Output() imageClick: EventEmitter<any> = new EventEmitter();
  @ContentChild('imageDetails', {static: false}) imageDetailsTmpl: TemplateRef<any>;
  @Input() images: any[];
  @Input() targetRowHeight: number = 220;

  scaledImages = [];
  width = 0;

  ngOnInit() {
    const el = this.elementRef.nativeElement;
    elementResizeEvent(this.elementRef.nativeElement, () => {
      if (Math.round(this.width) !== Math.round(el.getBoundingClientRect().width)) {
        this.process();
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
    this.scaledImages = createLayout(this.images, this.width, this.targetRowHeight);
  }

  makeStyle({ scaledWidthPc, scaledHeight }) {
    return {
      width: scaledWidthPc + '%',
      height: scaledHeight + 'px'
    }
  }

  onClick(index: number, event: any) {
    this.imageClick.emit({
      image: this.images[index],
      index,
      event
    });
  }

}
