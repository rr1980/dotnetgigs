import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../services/auth.guard';

import  { LoginButtonComponent } from '../../components.container';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authGuard: AuthGuard) { }

  public IsLoggedIn(): boolean {
    return this.authGuard.IsLoggedIn();
  }
  ngOnInit() {
  }
}
