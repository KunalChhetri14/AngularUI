import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChecklistsRoutingModule } from './checklists-routing.module';
import {ChecklistsComponent} from './checklists.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material';
import { NewItemComponent } from './new-item/new-item.component';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ChecklistsComponent,
    NewItemComponent
  ],
  imports: [
    CommonModule,
    ChecklistsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers:[
    {
      provide:MatDialogRef,useValue:{}
    },
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  entryComponents:[
    NewItemComponent
  ]
})
export class ChecklistsModule { }
