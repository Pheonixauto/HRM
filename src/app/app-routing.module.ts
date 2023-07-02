import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {
    path: 'home', loadComponent: () => import('./component/home/home.component').then(m => m.HomeComponent),
    loadChildren: () => import('./component/home/home.router').then(m => m.HOME_ROUTER)
  },
  { path: 'employee', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
