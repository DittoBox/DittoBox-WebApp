import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarContentComponent } from './shared/toolbar-content/toolbar-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavContentComponent } from "./shared/sidenav-content/sidenav-content.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MatToolbarModule, ToolbarContentComponent, MatDialogModule, MatSidenavModule, SidenavContentComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'DittoBox-WebApp';
}
