import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ImageActions } from '../../actions';
import { AppState } from '../../store';

@Component({
  selector: 'selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.less']
})
export class SelectionComponent {
  constructor(
    private ngRedux: NgRedux<AppState>,
    private actions: ImageActions
  ) { }

  @select() readonly selectedImages$: ExampleImage[];

  onClearSelected () {
    this.ngRedux.dispatch(this.actions.deselectall());
  }

  onSelectAll () {
    this.ngRedux.dispatch(this.actions.selectall());
  }
}
