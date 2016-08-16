import { Component } from '@angular/core';
import { FORM_DIRECTIVES, NgModel } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
let formData = require('data/form.json.js');


@Component({
  selector: 'my-form',
    styles:[`
        input { display:block;};
        .ng-valid[required] { border-left: 5px solid #42A948; /* green */ };
        .ng-invalid { border-left: 5px solid #a94442; /* red */ }
    `],
    directives:[FORM_DIRECTIVES, NgModel],
    template:`
       {{diagnostics}}
        <form #survey="ngForm" name="survey">
           <button (click)="showModel(survey, $event)" type="button">Submit</button>
            <div *ngFor="let section of formData; let i = index">
                <h3>Name:</h3>

<!-- auto fill is detected -->
                <input type="text" 
                    name="name"
                    required
                    pattern="[a-zA-Z]+"
                    maxlength="5"
                    #name="ngForm"
                    [(ngModel)]="ng2Form['name']" />

 <!-- validation errors, uses templateRef #name-->               
                <h1 [hidden]="name.valid || name.pristine" class="alert alert-danger">
                    Name is required</h1>
                <h3>{{section.intro}}</h3>

                <div *ngFor="let q of section.questions; let ii = index">
                    <h4>q.text: {{q.text}}</h4>
                    <div *ngFor="let a of q.answers" type="q.type">
                        <label *ngIf="q.type !== 'select'" for="q.id">a.text: {{a.text}} - q.type: {{q.type}}</label>

<!-- checkbox = true; ng1 had ng-true-value -->                
                        <input *ngIf="q.type == 'checkbox'" type="checkbox"
                            name="q.id"
                            [(ngModel)]="ng2Form[q.id +'_'+ a.id]" />
               
                        <input *ngIf="q.type == 'radio'" type="radio"
                            name="q.id"
                            (click)="ng2Form[q.id] = a.id" />
                    </div>
                    <h4 *ngIf="q.type == 'select'">{{q.text}}</h4>
                    
<!-- dynamic Select field; [selected] works in Plunkr -->
                    <select *ngIf="q.type == 'select'" name="q.id" [(ngModel)]="ng2Form[q.id]"
                        form="survey" value="woot">
                        <option *ngFor="let a of q.answers; let iii = index;" 
                            [selected]="(iii == 0)?'true':null"
                            [value]="a.id">{{a.text}}</option>
                    </select>
                </div>
            </div>
        </form>
`
})
export class FormComponent {
    public ng2Form = {};
    public formData = {};

    constructor(){
        this.formData = formData;

    }

    showModel(form, event){
        console.log(form);
        console.log(event);
        console.log('..model ', this.ng2Form);
    }
    get diagnostics(){ return JSON.stringify(this.ng2Form); }
}
