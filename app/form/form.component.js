"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var formData = require('data/form.json.js');
var FormComponent = (function () {
    function FormComponent() {
        this.ng2Form = {};
        this.formData = {};
        this.formData = formData;
    }
    FormComponent.prototype.showModel = function (event) {
        console.log('form ', this.ng2Form);
    };
    Object.defineProperty(FormComponent.prototype, "diagnostics", {
        get: function () { return JSON.stringify(this.ng2Form); },
        enumerable: true,
        configurable: true
    });
    FormComponent = __decorate([
        core_1.Component({
            selector: 'my-form',
            styles: ["\n        input { display:block;};\n        .ng-valid[required] { border-left: 5px solid #42A948; /* green */ };\n        .ng-invalid { border-left: 5px solid #a94442; /* red */ }\n    "],
            template: "\n       {{diagnostics}}\n        <form #survey=\"ngForm\" name=\"survey\">\n           <button (click)=\"showModel($event)\" type=\"button\">Sumbit</button>\n            <div *ngFor=\"let section of formData; let i = index\">\n                <h3>{{section.intro}}</h3>\n                <div *ngFor=\"let q of section.questions; let ii = index\">\n                    <h4>q.text: {{q.text}}</h4>\n                    <div *ngFor=\"let a of q.answers\" type=\"q.type\">\n                        <label *ngIf=\"q.type !== 'select'\" for=\"q.id\">a.text: {{a.text}} - q.type: {{q.type}}</label>\n                        <input *ngIf=\"q.type == 'checkbox'\" type=\"checkbox\"\n                            name=\"q.id\"\n                            (click)=\"ng2Form[q.id +'_'+ a.id] = a.score\"/>\n                        <input *ngIf=\"q.type == 'radio'\" type=\"radio\"\n                            name=\"q.id\"\n                            (click)=\"ng2Form[q.id] = a.score\"/>\n                    </div>\n                    <h4 *ngIf=\"q.type == 'select'\">{{q.text}}</h4>\n                    <select *ngIf=\"q.type == 'select'\" name=\"q.id\" [(ngModel)]=\"ng2Form[q.id]\">\n                        <option *ngFor=\"let a of q.answers; let iii = index;\" \n                            [selected]=\"(iii == 0)?'selected':null\"\n                            [value]=\"a.id\">{{a.text}}</option>\n                    </select>\n                </div>\n            </div>\n        </form>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map