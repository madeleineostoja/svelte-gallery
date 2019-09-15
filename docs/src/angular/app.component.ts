import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  constructor(router: Router) {
    router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.route = router.url.replace('/', '');
          this.isBasic = this.route === 'basic';
        }
      }
    )
  }

  route = ''
  isBasic = true
}
