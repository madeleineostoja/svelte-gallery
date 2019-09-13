import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';  // Included with Angular CLI.
import 'zone.js/dist/zone-patch-canvas';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { environment } from './environments/environment';

//if (environment.production) {
  enableProdMode();
//}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
