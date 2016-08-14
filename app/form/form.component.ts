import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
let formData = require('data/form.json.js');


@Component({
  selector: 'my-form',
    styles:[`
        input { display:block;};
        .ng-valid[required] { border-left: 5px solid #42A948; /* green */ };
        .ng-invalid { border-left: 5px solid #a94442; /* red */ }
    `],
    template:`
       {{diagnostics}}
        <form #survey="ngForm" name="survey">
           <button (click)="showModel($event)" type="button">Sumbit</button>
            <div *ngFor="let section of formData; let i = index">
                <h3>{{section.intro}}</h3>
                <div *ngFor="let q of section.questions; let ii = index">
                    <h4>q.text: {{q.text}}</h4>
                    <div *ngFor="let a of q.answers" type="q.type">
                        <label *ngIf="q.type !== 'select'" for="q.id">a.text: {{a.text}} - q.type: {{q.type}}</label>
                        <input *ngIf="q.type == 'checkbox'" type="checkbox"
                            name="q.id"
                            (click)="ng2Form[q.id +'_'+ a.id] = a.score"/>
                        <input *ngIf="q.type == 'radio'" type="radio"
                            name="q.id"
                            (click)="ng2Form[q.id] = a.score"/>
                    </div>
                    <h4 *ngIf="q.type == 'select'">{{q.text}}</h4>
                    <select *ngIf="q.type == 'select'" name="q.id" [(ngModel)]="ng2Form[q.id]">
                        <option *ngFor="let a of q.answers; let iii = index;" 
                            [selected]="(iii == 0)?'selected':null"
                            [value]="a.id">{{a.text}}</option>
                    </select>
                </div>
            </div>
        </form>
`,
  // templateUrl: 'app/html/form.component.html'
})
export class FormComponent {
    public ng2Form = {};
    public formData = {};

    constructor(){
        this.formData = formData;

    }

    showModel(event){
        console.log('form ', this.ng2Form);
    }
    get diagnostics(){ return JSON.stringify(this.ng2Form); }
}
