import { Component } from '@angular/core';
import { AuthGuard, User } from '../../services/auth.guard';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {

    public user = new User('', '');

    constructor(private authGuard: AuthGuard) {
    }

    login() {
        this.authGuard.Login(this.user);
    }
}
