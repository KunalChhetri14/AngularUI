import { Component, OnInit,Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<NewItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
        position:[
          '',[
              Validators.required
          ]
        ],
        name:[
          '',[
            Validators.required
          ]
        ],
        weight:[
          '',[
            Validators.required
          ]
        ],
        symbol:[
          '',[
            Validators.required
          ]
        
        ]


    })

  }


  addRecord(){
    console.log("This is valid ",this.form.value,"  status",this.form.valid);
    if(this.form.valid){
      this.dialogRef.close(this.form.value);
    }
  }


  cancel(){
    this.dialogRef.close(undefined);
  }

}
