import {RouterModule, Routes} from '@angular/router';
import {ContainerComponent} from "./containers/page/container/container.component";
import {NgModule} from "@angular/core";
import {TemplateItemComponent} from "./containers/components/template-item/template-item.component";
import {FacilitiesItemComponent} from "./containers/components/facilities-item/facilities-item/facilities-item.component";

export const routes: Routes = [
  {
    path: 'containers',
    component: ContainerComponent,
  },
  {
    path: 'templates',
    component: TemplateItemComponent,
  },
  {
    path: 'facilities',
    component: FacilitiesItemComponent,
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
