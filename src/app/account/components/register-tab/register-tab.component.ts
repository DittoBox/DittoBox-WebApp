import {Component, EventEmitter, Output} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register-tab',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './register-tab.component.html',
  styleUrl: './register-tab.component.css'
})
export class RegisterTabComponent {
  @Output() tabChanged = new EventEmitter<'worker' | 'owner'>();
  activeTab: 'worker' | 'owner' = 'worker';

  selectTab(tab: 'worker' | 'owner') {
    this.activeTab = tab;
    this.tabChanged.emit(tab);
  }
}
