import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
    path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module')
      .then(module => module.DashboardModule)
  },
  {
    path: 'employees', loadChildren: () => import('./components/employees/employees.module')
      .then(module => module.EmployeesModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
