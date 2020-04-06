import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveSidenavDirective } from './responsive-sidenav.directive';


import {MatSidenavModule} from '@angular/material/sidenav';
import {LayoutModule} from '@angular/cdk/layout';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [ResponsiveSidenavDirective],
  imports: [
    CommonModule,
    MatSidenavModule,
    LayoutModule,
    RouterModule
  ],
  exports: [ResponsiveSidenavDirective]
})
export class ResponsiveSidenavModule { }
