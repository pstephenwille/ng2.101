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
var FormComponent = (function () {
    function FormComponent() {
        this.formModel = { fname: 'woot', lname: null };
    }
    FormComponent.prototype.showModel = function () {
        console.log('form ', this.formModel);
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'my-form',
            styles: [
                "\n    input { display:block;}\n"
            ],
            template: "    <h1>My First Angular 2 App, with TypeScript</h1>\n    <form name=\"ng2-form\" id=\"ng2-form\">\n        <input [(ngModel)]=\"formModel.fname\" name=\"fname\" id=\"fname\" type=\"text\" placeholder=\"First name\" />\n        <input [(ngModel)]=\"formModel.lname\" name=\"lname\" id=\"lname\" type=\"text\" placeholder=\"Last name\" />\n        <button (click)=\"showModel()\" type=\"button\">Sumbit</button>\n        <hr>\n    </form>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map