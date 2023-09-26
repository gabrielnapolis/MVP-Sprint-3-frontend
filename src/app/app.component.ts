import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'frontend'; 
  login: any;

  constructor ( private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login' || event.url == '/person/create') {
          this.login= true;
        } else {
          this.login= false;
        }
      }
    });
  }
}
