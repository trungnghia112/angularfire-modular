import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { Constants } from '@core/configs/constants';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    // private notify: NotifyService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.currentUser.pipe(
      take(1),
      map(user => {
        if (!user) {
          return false;
        }
        return user.roles ? user.roles.admin : false;
      }),
      tap((loggedIn) => {
        if (!loggedIn) {
          console.log('access denied');
          // this.notify.update('You must be logged in!', 'error');
          this.router.navigate([Constants.loginUrl]);
        }
      })
    );
  }
}
