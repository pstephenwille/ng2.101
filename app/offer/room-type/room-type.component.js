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
var core_1 = require("@angular/core");
var room_thumbnail_component_1 = require("./room-thumbnail/room-thumbnail.component");
var room_basic_info_component_1 = require("./room-basic-info/room-basic-info.component");
var RoomTypeComponent = (function () {
    function RoomTypeComponent() {
        console.log('room-type component ');
    }
    RoomTypeComponent.prototype.ngOnInit = function () {
    };
    RoomTypeComponent.prototype.ngAfterViewInit = function () {
        console.log('..init ', this.roomInfo);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RoomTypeComponent.prototype, "room", void 0);
    __decorate([
        core_1.ViewChild(room_basic_info_component_1.RoomBasicInfoComponent), 
        __metadata('design:type', room_basic_info_component_1.RoomBasicInfoComponent)
    ], RoomTypeComponent.prototype, "roomInfo", void 0);
    RoomTypeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'room-type',
            templateUrl: 'room-type.html',
            directives: [room_thumbnail_component_1.RoomThumbnailComponent, room_basic_info_component_1.RoomBasicInfoComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RoomTypeComponent);
    return RoomTypeComponent;
}());
exports.RoomTypeComponent = RoomTypeComponent;
//# sourceMappingURL=room-type.component.js.map