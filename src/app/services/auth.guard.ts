import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.userIsLoggedIn(url);
    }
    private userIsLoggedIn(url: string): boolean {
        console.log('HALLO');
        this.router.navigate(['/login']);
        return false;
    }
}
