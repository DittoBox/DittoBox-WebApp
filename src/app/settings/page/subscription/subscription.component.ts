import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SubscriptionDialogComponent } from '../../components/subscription-dialog/subscription-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [
	MatCardModule,
	MatButtonModule
  ],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
	readonly dialog = inject(MatDialog);

	openUpgradeDialog(): void {
		this.dialog.open(SubscriptionDialogComponent, {
			width: '500px'
		});
	}

	openDowngradeDialog(): void {
		this.dialog.open(SubscriptionDialogComponent, {
			width: '500px'
		});
	}
}
