import { Component } from '@angular/core';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {


  log(x :any){
    console.log(x);
  }

  onSubmit(form :any){
    console.log(form.value.fullName.firstname);
  }

  contactList = ['Email', 'Phone', 'Fax', 'Post'];

}
