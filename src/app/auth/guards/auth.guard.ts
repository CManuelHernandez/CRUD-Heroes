import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGard implements CanMatch, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  private chekAuthStatus(): boolean | Observable<boolean> {
    return this.authService.checkAuthentication().pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) this.router.navigate(['/auth/login']);
      })
    );
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> {
    /* console.log('canMatch', { route, segments }); */
    return this.chekAuthStatus();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    /* console.log('canActivate', { route, state }); */
    return this.chekAuthStatus();
  }
}
