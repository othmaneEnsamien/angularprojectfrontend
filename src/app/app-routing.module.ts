import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeaffichageComponent } from './employeaffichage/employeaffichage.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: "", redirectTo: '/homepage', pathMatch: 'full' },
  { path: "homepage", component: HomepageComponent },
  { path: "gestionemploye", component: EmployeaffichageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
