import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ImageMasonryComponent } from '../../../src/angular/image-masonry.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageMasonryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
