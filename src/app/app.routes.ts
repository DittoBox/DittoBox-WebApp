import { Routes } from '@angular/router';
import {ContainerComponent} from "./containers/page/container/container.component";
import {TemplateComponent} from "./containers/page/template/template.component";

export const routes: Routes = [
  {
    path: 'containers',
    component: ContainerComponent,
  },
  {
    path: 'templates',
    component: TemplateComponent,
  },

  { path: '',
    redirectTo: 'containers', pathMatch: 'full'
  },
];
