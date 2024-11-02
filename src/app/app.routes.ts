import {RouterModule, Routes} from '@angular/router';
import {ContainerComponent} from "./containers/page/container/container.component";
import {NgModule} from "@angular/core";
import {TemplateItemComponent} from "./containers/components/template-item/template-item.component";
import {FacilityComponent} from "./facilities/page/facility/facility.component";
import {WorkerComponent} from "./workers/page/worker/worker.component";
import {TemplateComponent} from "./containers/page/template/template.component";
import {NotificationsComponent} from "./settings/page/notifications/notifications.component";
import {AccountComponent} from "./settings/page/account/account.component";
import {SubscriptionComponent} from "./settings/page/subscription/subscription.component";

export const routes: Routes = [
  {
    path: 'containers',
    component: ContainerComponent,
  },
  {
    path: 'templates',
    component: TemplateComponent,
  },
  {
    path: 'facilities',
    component: FacilityComponent,
  },

	{
		path: 'workers',
		component: WorkerComponent,
	},
	{
		path: 'notifications',
		component: NotificationsComponent,
	},
	{
		path: 'account',
		component: AccountComponent,
	},
	{
		path: 'subscription',
		component: SubscriptionComponent,
	},

  { path: '',
    redirectTo: '/containers', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
