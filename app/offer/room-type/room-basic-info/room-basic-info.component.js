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
var RoomBasicInfoComponent = (function () {
    function RoomBasicInfoComponent() {
        this.offers = [];
    }
    RoomBasicInfoComponent.prototype.ngAfterContentInit = function () {
        this.offers = this.room.offers.map(function (offer) {
            return [Object.entries(offer)];
        });
        console.log('room-basic-info component ', this.offers);
    };
    /**
    * The class constructor is called before any other lifecycle hook.
    * Use it to inject dependencies, but avoid any
    * serious work here.*/
    RoomBasicInfoComponent.prototype.ngOnChanges = function (changeRecord) { };
    /**
    * Called after every change to input properties and before processing content or child views.*/
    RoomBasicInfoComponent.prototype.ngOnInit = function () { };
    /**
    * Called after the constructor, initializing input properties,
     * and the first call to ngOnChanges.*/
    RoomBasicInfoComponent.prototype.ngDoCheck = function () { };
    /**
     * Called every time that the input properties of a component or a directive are checked.
     * Use it to extend change
     *  detection by performing a custom check.*/
    // ngAfterContentInit() {  }
    /**
     * Called after ngOnInit when the component's or directive's content has been initialized.*/
    RoomBasicInfoComponent.prototype.ngAfterContentChecked = function () { };
    /**
     * Called after every check of the component's or directive's content.*/
    RoomBasicInfoComponent.prototype.ngAfterViewInit = function () { };
    /**
     * Called after ngAfterContentInit when the component's view has been initialized.
     * Applies to components only.*/
    RoomBasicInfoComponent.prototype.ngAfterViewChecked = function () { };
    /**
     * Called after every check of the component's view. Applies to components only.*/
    RoomBasicInfoComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RoomBasicInfoComponent.prototype, "room", void 0);
    RoomBasicInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'room-basic-info',
            templateUrl: 'room-basic-info.html',
            styleUrls: [],
            providers: [],
            pipes: []
        }), 
        __metadata('design:paramtypes', [])
    ], RoomBasicInfoComponent);
    return RoomBasicInfoComponent;
}());
exports.RoomBasicInfoComponent = RoomBasicInfoComponent;
//# sourceMappingURL=room-basic-info.component.js.map