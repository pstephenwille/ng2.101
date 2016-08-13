import { Component } from '@angular/core';


@Component({
  selector: 'my-form',
    styles:[`
        input { display:block;};
        .ng-valid[required] { border-left: 5px solid #42A948; /* green */ };
        .ng-invalid { border-left: 5px solid #a94442; /* red */ }
    `],
    template:`
    {{diagnostics}}<!-- diagnostic not working -->
    <form #theForm="ngForm" name="ng2Form" id="ng2Form">
        <input [(ngModel)]="ng2Form.fname" 
            name="fname" id="fname" 
            type="text" 
            required
            placeholder="First name" />
        <input [(ngModel)]="ng2Form.lname" 
            name="lname" id="lname" 
            type="text" 
            #lname="ngModel"
            required
            placeholder="Last name" />
         <!--<div [hidden]="lname.valid || lname.pristine">Last name is required</div>-->
        <button (click)="showModel($event)" 
            [disabled]="!theForm.form.valid || theForm.form.pristine"
            type="button">Sumbit</button>
        <hr>
    </form>
`,
  // templateUrl: 'app/html/form.component.html'
})
export class FormComponent {
    public ng2Form = {};
    
    constructor(){}

    showModel(arg){
        window['woot'] = arg;
        console.log('form ', this.ng2Form);
    }
    get diagnostics(){ return JSON.stringify(this.ng2Form); }
}
