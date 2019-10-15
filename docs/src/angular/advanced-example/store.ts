import { ImageActions, ImageAction } from './actions';

export interface AppState {
  images: ExampleImage[],
  selectedImages: ExampleImage[]
}

export const INITIAL_STATE: AppState = {
  images: [],
  selectedImages: []
};

export function rootReducer(state: AppState, action: ImageAction): AppState {
  switch (action.type) {
    case ImageActions.SET:
      return {
        images: [...action.images],
        selectedImages: [...state.selectedImages]
      };
    case ImageActions.SELECT:
      return {
        images: state.images,
        selectedImages: [state.images[action.index], ...state.selectedImages]
      };
    case ImageActions.SELECTALL:
      return {
        images: state.images,
        selectedImages: [...state.images]
      };
    case ImageActions.DESELECT:
      return {
        images: state.images,
        // use src as an identifer, each image could have a uid instead
        selectedImages: state.selectedImages.filter(v => v.src !== state.images[action.index].src)
      };
    case ImageActions.DESELECTALL:
      return {
        images: state.images,
        selectedImages: []
      };
  }
  return state;
}
