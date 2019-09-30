import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic-example/basic.component';
import { AdvancedComponent } from './advanced-example/advanced.component';
import { CheckboxComponent } from './advanced-example/components/checkbox/checkbox.component';
import { ImageOverlayComponent } from './advanced-example/components/image-overlay/image-overlay.component';
import { ImageMasonryModule } from '../../../src/angular/image-masonry.module';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/basic', pathMatch: 'full' },
  { path: 'basic', component: BasicComponent },
  { path: 'advanced', component: AdvancedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    AdvancedComponent,
    ImageOverlayComponent,
    CheckboxComponent
  ],
  imports: [
    ImageMasonryModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
