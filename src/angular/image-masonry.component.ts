import { Component, Input, OnInit, OnChanges, OnDestroy, ElementRef, ChangeDetectorRef, SimpleChanges, ContentChild, TemplateRef, EventEmitter, Output } from '@angular/core';
import createLayout from '../common/justified-layout.js';
import elementResizeEvent, { unbind } from 'element-resize-event';
import { debounce } from '../common/utils';

@Component({
  selector: 'image-masonry',
  templateUrl: './image-masonry.component.html',
  styleUrls: ['./image-masonry.component.less']
})
export class ImageMasonryComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private elementRef: ElementRef, private changeDetectorRef: ChangeDetectorRef) { }
  @Output() imageClick: EventEmitter<any> = new EventEmitter();
  @ContentChild('imageDetails', { static: false }) imageDetailsTmpl: TemplateRef<any>;
  @Input() images: any[];
  @Input() targetRowHeight: number = 220;
  @Input() padding: number = 4;

  scaledImages: ScaledImage[] = [];
  width = 0;
  isResizing = false;

  ngOnInit() {
    const el: Element = this.elementRef.nativeElement.querySelector('[data-resizer]');
    const resizedFinished = debounce(() => {
      this.isResizing = false;
      this.changeDetectorRef.detectChanges();
    }, 100);
    elementResizeEvent(el, () => {
      if (Math.round(this.width) !== Math.round(el.getBoundingClientRect().width)) {
        this.isResizing = true;
        this.process();
        this.changeDetectorRef.detectChanges();
        resizedFinished();
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

  makeStyle({ scaledWidth, scaledHeight, isLastInRow, isLastRow }: ScaledImage) {
    let mr = this.padding + 'px';
    const mb = isLastRow ? '0' : mr;
    let flex = `0 0 ${scaledWidth}px`;
    if (isLastInRow) {
      mr = '0';
      flex = `1 1 ${scaledWidth-4}px`;
    }
    return {
      height: scaledHeight + 'px',
      flex: flex,
      'margin-right': mr,
      'margin-bottom': mb
    }
  }

  onClick(index: number, event: any) {
    this.imageClick.emit({
      image: this.images[index],
      index,
      event
    });
  }

  identify(index: number, item: ScaledImage) {
    return item.src;
  }
}
