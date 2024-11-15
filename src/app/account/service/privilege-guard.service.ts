import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PrivilegeGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: any): boolean {
    const requiredPrivilege = route.data.requiredPrivilege;
    const hasToken = !!localStorage.getItem('token');
    const privileges: string[] = JSON.parse(localStorage.getItem('privileges') || '[]')

    if (!hasToken) {
      // Redirigir al login si no hay token
      this.router.navigate(['/login']);
      return false;
    }

    if (requiredPrivilege && !privileges.includes(requiredPrivilege)) {
      // Redirigir a la ruta 'account' si no tiene el privilegio requerido
      this.router.navigate(['/account']);
      return false;
    }

    return true;
  }
}
