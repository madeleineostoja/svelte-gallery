import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageMasonryComponent } from './image-masonry.component';
import { LazyImageComponent } from './lazy-image/lazy-image.component';

@NgModule({
 imports:      [ CommonModule ],
 declarations: [ ImageMasonryComponent, LazyImageComponent ],
 exports:      [ ImageMasonryComponent ]
})
export class ImageMasonryModule { }
