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
        this.ng2Form = {};
    }
    FormComponent.prototype.showModel = function (arg) {
        window['woot'] = arg;
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
            template: "\n    {{diagnostics}}<!-- diagnostic not working -->\n    <form #theForm=\"ngForm\" name=\"ng2Form\" id=\"ng2Form\">\n        <input [(ngModel)]=\"ng2Form.fname\" \n            name=\"fname\" id=\"fname\" \n            type=\"text\" \n            required\n            placeholder=\"First name\" />\n        <input [(ngModel)]=\"ng2Form.lname\" \n            name=\"lname\" id=\"lname\" \n            type=\"text\" \n            #lname=\"ngModel\"\n            required\n            placeholder=\"Last name\" />\n         <!--<div [hidden]=\"lname.valid || lname.pristine\">Last name is required</div>-->\n        <button (click)=\"showModel($event)\" \n            [disabled]=\"!theForm.form.valid || theForm.form.pristine\"\n            type=\"button\">Sumbit</button>\n        <hr>\n    </form>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map