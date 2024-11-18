import {RouterModule, Routes} from '@angular/router';
import {ContainerComponent} from "./containers/page/container/container.component";
import {NgModule} from "@angular/core";
import {TemplateItemComponent} from "./containers/components/template-item/template-item.component";
import {FacilityComponent} from "./facilities/page/facility/facility.component";
import {WorkerComponent} from "./workers/page/worker/worker.component";
import { NotificationsComponent } from './settings/page/notifications/notifications.component';
import { AccountComponent } from './settings/page/account/account.component';
import { SubscriptionComponent } from './settings/page/subscription/subscription.component';
import { TemplateComponent } from './containers/page/template/template.component';
import {LoginComponent} from "./account/page/login/login.component";
import {RegisterComponent} from "./account/page/register/register.component";
import {
  RegisterOwnerCompanyFormComponent
} from "./account/components/register-owner-company-form/register-owner-company-form.component";
import {TokenGuardService} from "./account/service/token-guard.service";
import {PrivilegeGuardService} from "./account/service/privilege-guard.service";
import {
  BarChartContainersByFacilityComponent
} from "./dashboard/components/bar-chart-containers-by-facility/bar-chart-containers-by-facility.component";
import {DashboardComponent} from "./dashboard/page/dashboard/dashboard.component";
import {PageNotFoundComponent} from "./shared/page/page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  },
  {
    path:'register-company',
    component:RegisterOwnerCompanyFormComponent,
  },
  {
    path: 'containers',
    component: ContainerComponent,
    canActivate: [TokenGuardService, PrivilegeGuardService],
    data: { requiredPrivilege: 'WorkerManagement' }
  },
  {
    path: 'templates',
    component: TemplateComponent,
    canActivate: [TokenGuardService, PrivilegeGuardService],
    data: { requiredPrivilege: 'WorkerManagement' }
  },
  {
    path: 'facilities',
    component: FacilityComponent,
    canActivate: [TokenGuardService, PrivilegeGuardService],
    data: { requiredPrivilege: 'AccountManagement' }
  },
  {
    path: 'workers',
    component: WorkerComponent,
    canActivate: [TokenGuardService, PrivilegeGuardService],
    data: { requiredPrivilege: 'GroupManagement' }
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    canActivate: [TokenGuardService, PrivilegeGuardService],
    data: { requiredPrivilege: 'WorkerManagement' }
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [TokenGuardService]
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
    canActivate: [TokenGuardService, PrivilegeGuardService],
    data: { requiredPrivilege: 'AccountManagement' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [TokenGuardService]
  },

  { path: '',
    redirectTo: '/login', pathMatch: 'full'
  },
  { path: '**',
    component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
