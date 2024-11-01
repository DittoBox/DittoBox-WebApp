import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-subscription-dialog',
	standalone: true,
	imports: [
		MatButtonModule,
		MatDialogModule,
	],
	templateUrl: './subscription-dialog.component.html',
	styleUrls: ['./subscription-dialog.component.css']
})
export class SubscriptionDialogComponent {
	readonly dialogRef = inject(MatDialogRef<SubscriptionDialogComponent>);
}
