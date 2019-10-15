import { Component, Input, EventEmitter, Output, HostBinding, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ImageActions } from '../../actions';
import { AppState } from '../../store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'image-overlay',
  templateUrl: './image-overlay.component.html',
  styleUrls: ['./image-overlay.less'],
  host: {
    class: 'image-overlay'
  }
})
export class ImageOverlayComponent implements OnInit, OnDestroy {
  @Input() image: ScaledImage;
  @Output() view = new EventEmitter();

  @HostBinding('class.select-mode') isSelectMode:boolean = false;
  @HostBinding('class.is-selected') isSelected:boolean = false;
  isHovering = false;
  subscription: Subscription;

  @HostListener('click') onClick() {
    if(this.isSelectMode) {
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

  constructor(
    private ngRedux: NgRedux<AppState>,
    private actions: ImageActions
  ) { }

  ngOnInit() {
    this.subscription = this.ngRedux.select<ExampleImage[]>('selectedImages').subscribe(selectedImages => {
      // use src as key
      this.isSelected = selectedImages.find(image => image.src === this.image.src) !== undefined;
      this.isSelectMode = selectedImages.length > 0;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onChange(value: boolean) {
    if(value) {
      this.ngRedux.dispatch(this.actions.select(this.image.index));
    } else {
      this.ngRedux.dispatch(this.actions.deselect(this.image.index));
    }
  }

  onMagnifyClick(e: MouseEvent) {
    e.stopPropagation();
    this.view.emit(this.image.index);
  }

}
