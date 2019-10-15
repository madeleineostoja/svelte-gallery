import { Injectable } from '@angular/core';
import { Action } from 'redux';

export interface ImageAction extends Action {
  images?: ExampleImage[],
  index?: number
}

@Injectable()
export class ImageActions {
  static SET = 'SET';
  static SELECT = 'SELECT';
  static SELECTALL = 'SELECTALL';
  static DESELECT = 'DESELECT';
  static DESELECTALL = 'DESELECTALL';

  set(images: ExampleImage[]): ImageAction {
    return { type: ImageActions.SET, images };
  }

  select(index: number): ImageAction {
    return { type: ImageActions.SELECT, index };
  }

  selectall(): ImageAction {
    return { type: ImageActions.SELECTALL };
  }

  deselect(index: number): ImageAction {
    return { type: ImageActions.DESELECT, index };
  }

  deselectall(): ImageAction {
    return { type: ImageActions.DESELECTALL };
  }
}
