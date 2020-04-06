import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//importing angular module
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {ResponsiveSidenavModule} from './responsive-sidenav/responsive-sidenav.module';

import {ChecklistsModule} from './Components/checklists/checklists.module';
import { ReportsComponent } from './Components/reports/reports.component';
import { VendorsComponent } from './Components/vendors/vendors.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ResponsiveSidenavModule,
    ChecklistsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
