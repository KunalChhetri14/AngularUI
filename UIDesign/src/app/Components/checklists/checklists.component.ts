import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator, MatPaginatorIntl} from '@angular/material';
import {NewItemComponent} from './new-item/new-item.component';

import {MatDialog} from '@angular/material/dialog';

import {Overlay} from '@angular/cdk/overlay';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

  var ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];



@Component({
  selector: 'app-checklists',
  templateUrl: './checklists.component.html',
  styleUrls: ['./checklists.component.css']
})
export class ChecklistsComponent extends MatPaginatorIntl implements OnInit {

  displayedColumns:string[]=['position','name','weight','symbol'];
  dataSource=new MatTableDataSource(ELEMENT_DATA);

  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dialogNewRecordComponent:MatDialog,
    public overlay: Overlay) { 
    super();

  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator=this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  createNewRecord(buttonPosition){
    var rect=document.getElementById("createRecordId").getBoundingClientRect();
    console.log(rect);
    const dialogNewRecord=this.dialogNewRecordComponent.open(NewItemComponent,{
      panelClass:'pop-modal',
      width:'250px',
      height:'420px',
       
      
      data: {
        field: "Select Parent Objectives"
      }

    })

    dialogNewRecord.afterClosed().subscribe(result => {
      if (result != undefined) {
        
        console.log("User component was closed ", result);
        ELEMENT_DATA.push(result);
        console.log("Length is ",ELEMENT_DATA.length);
        this.dataSource.data=ELEMENT_DATA;
      }
    })


  }

}
