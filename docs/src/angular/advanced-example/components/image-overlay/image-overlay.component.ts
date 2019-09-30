import { Component, Input, EventEmitter, Output, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'image-overlay',
  templateUrl: './image-overlay.component.html',
  styleUrls: ['./image-overlay.less'],
  host: {
    class: 'image-overlay'
  }
})
export class ImageOverlayComponent {
  @Input() image: ScaledImage;
  @Input() selectMode: boolean;
  @Output() selectChange = new EventEmitter();
  @Output() view = new EventEmitter();

  @HostBinding('class.select-mode') get isSelectMode() { return this.selectMode };
  @HostBinding('class.is-selected') isSelected:boolean = false;
  isHovering = false;

  @HostListener('click') onClick() {
    if(this.selectMode) {
      this.isSelected = !this.isSelected;
      this.onChange(this.isSelected)
    } else {
      this.view.emit(this.image.index);
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovering = false;
  }

  onChange(value: boolean) {
    this.selectChange.emit({value, index: this.image.index});
  }

  onMagnifyClick(e: MouseEvent) {
    e.stopPropagation();
    this.view.emit(this.image.index);
  }
}
