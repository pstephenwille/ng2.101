import { Component } from '@angular/core';
@Component({
  selector: 'my-form',
    styles:[
`
    input { display:block;}
`
    ],
    template:
`    <h1>My First Angular 2 App, with TypeScript</h1>
    <form name="ng2-form" id="ng2-form">
        <input [(ngModel)]="formModel.fname" name="fname" id="fname" type="text" placeholder="First name" />
        <input [(ngModel)]="formModel.lname" name="lname" id="lname" type="text" placeholder="Last name" />
        <button (click)="showModel()" type="button">Sumbit</button>
        <hr>
    </form>
`,
  // templateUrl: 'app/html/form.component.html'
})
export class FormComponent {
    formModel = {fname:'woot', lname:null};

    showModel(){
        console.log('form ', this.formModel);
    }

}
