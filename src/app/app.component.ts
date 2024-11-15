import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarContentComponent } from './shared/toolbar-content/toolbar-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavContentComponent } from "./shared/sidenav-content/sidenav-content.component";
import {filter} from "rxjs";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, ToolbarContentComponent, MatDialogModule, MatSidenavModule, SidenavContentComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  showLayout = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // Verifica la ruta actual al iniciar
    this.showLayout = !this.isAuthRoute(this.router.url);

    // Actualiza showLayout al cambiar de ruta
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showLayout = !this.isAuthRoute(event.urlAfterRedirects);
      });
  }

  private isAuthRoute(url: string): boolean {
    return ['/login', '/register', '/register-company'].some(route => url.startsWith(route));
  }
}