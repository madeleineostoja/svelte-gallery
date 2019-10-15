import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic-example/basic.component';
import { AdvancedComponent } from './advanced-example/advanced.component';
import { CheckboxComponent } from './advanced-example/components/checkbox/checkbox.component';
import { SelectionComponent } from './advanced-example/components/selection/selection.component';
import { ImageOverlayComponent } from './advanced-example/components/image-overlay/image-overlay.component';
import { ImageMasonryModule } from '../../../src/angular/image-masonry.module';
import { RouterModule, Routes } from '@angular/router';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { rootReducer, AppState, INITIAL_STATE } from './advanced-example/store';
import { ImageActions } from './advanced-example/actions';

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
    CheckboxComponent,
    SelectionComponent
  ],
  imports: [
    ImageMasonryModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgReduxModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [ImageActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>) {
    // Tell @angular-redux/store about our rootReducer and our initial state.
    // It will use this to create a redux store for us and wire up all the
    // events.
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }

}
