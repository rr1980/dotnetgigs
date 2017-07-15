import { Component } from '@angular/core';
import { AuthGuard } from '../../../services/auth.guard';

@Component({
    moduleId: module.id,
    selector: 'login-button',
    templateUrl: 'login-button.component.html',
    styleUrls: ['login-button.component.scss']
})
export class LoginButtonComponent {

    constructor(private authGuard: AuthGuard) { }

    logout(event) {
        this.authGuard.Logout();
    }

    public IsLoggedIn(): boolean {
        return this.authGuard.IsLoggedIn();
    }

}
