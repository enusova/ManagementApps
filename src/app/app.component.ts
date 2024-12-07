import {Component, OnInit} from '@angular/core';
import {UserStorageService} from './auth/services/storage/user-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'HotelServer';

  isAdminLoggedIn : boolean = UserStorageService.isAdminLoggedIn();
  isCustomerLoggedIn : boolean = UserStorageService.isCustomerLoggedIn();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event.constructor.name === 'NavigationStart') {
        this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
        this.isCustomerLoggedIn = UserStorageService.isCustomerLoggedIn();
      }
    })
  }


  logout(): void {
    UserStorageService.signOut();
    this.router.navigateByUrl('/');
  }
}
