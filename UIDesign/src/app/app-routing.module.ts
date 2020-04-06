import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ChecklistsModule} from './Components/checklists/checklists.module'
const routes: Routes = [
  {
    path:'checklists',loadChildren:'./Components/checklists/checklists.module#ChecklistsModule'
  },
  {
    path:'reports',loadChildren:'./Components/reports/reports.module#ReportsModule'
  },
  {
    path:'vendors',loadChildren:'./Components/vendors/vendors.module#VendorsModule'
  },
  {
    path:'',redirectTo:'/checklists',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
