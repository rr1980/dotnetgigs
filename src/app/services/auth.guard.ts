import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class User {
    constructor(
        public name: string,
        public password: string) { }
}

const users = [
    new User('rr1980', '12003')
];

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.IsLoggedIn();
    }

    public IsLoggedIn(): boolean {
        if (localStorage.getItem("user") === null) {
            return false;
        }
        return true;
    }

    public Login(user: User) {
        const aUser = users.find(u => u.name === user.name);
        console.log(user);
        if (aUser && aUser.password === user.password) {
            localStorage.setItem("user", JSON.stringify(aUser));
            this.router.navigate(['admin']);
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

    public Logout() {
        localStorage.removeItem("user");
        this.router.navigate(['/home']);
    }
}


    // private isLoggedIn(url: string): boolean {
    // }

    //    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});