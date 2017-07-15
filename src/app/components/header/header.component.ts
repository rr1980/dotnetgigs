import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../services/auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isAuth = false;

  constructor(private authGuard: AuthGuard) { }

  logout(event) {
    console.log(this.isAuth);
    this.authGuard.Logout();
  }

  public IsLoggedIn(): boolean {
    return this.authGuard.IsLoggedIn();
  }

  ngOnInit() {
  }
}
