import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic-example/basic.component';
import { AdvancedComponent } from './advanced-example/advanced.component';
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
    AdvancedComponent
  ],
  imports: [
    ImageMasonryModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
