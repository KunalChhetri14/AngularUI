import { Component } from '@angular/core';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UIDesign';
  expand=true;
  style1=true;

  IconText=[
    {
      'icon':'folder','text':'Audit Managment System'
    },
    {
      'icon':'','text':'Checklists'
    },
    {
      'icon':'','text':'Reports'
    },
    {
      'icon':'folder','text':'Vendor Managment'
    },
    {
      'icon':'','text':'Vendors'
    }
  ]

  changeExpand(){
    if(this.expand==true){
        this.expand=false;
    }
    else{
      this.expand=true;
    }
  }

  redirectToPage(clickButtonRef){
    clickButtonRef.color='primary';
  }


  changeRoute(button){
    button.back
  }
}
