import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '@core/services/auth.service';
import { Constants } from '@core/configs/constants';

@Injectable(
  // {providedIn: 'root'}
)
export class NoAuthGuard implements CanActivate {
  constructor(private auth: AuthService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.auth.currentUser.pipe(
      take(1),
      map(isAuth => !isAuth),
      tap(loggedOut => {
        if (!loggedOut) {
          this.router.navigate([Constants.redirectUrl]);
        }
      })
    );
  }
}
