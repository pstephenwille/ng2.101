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
var common_1 = require('@angular/common');
var offer_service_1 = require("./offer.service/offer.service");
var http_1 = require("@angular/http");
var iterable_pipe_1 = require('../pipes/iterable.pipe');
var matchkey_pipe_1 = require('../pipes/matchkey.pipe');
var room_thumbnail_component_1 = require('./room-thumbnail.component/room-thumbnail.component');
var room_basic_info_component_1 = require('./room-basic-info.component/room-basic-info.component');
// enableProdMode();
var OfferComponent = (function () {
    function OfferComponent(_offerService) {
        this._offerService = _offerService;
        this.offers = [];
        this.details = { title: 'Hotel offer', id: '100', name: 'Hilton' };
    }
    OfferComponent.prototype.ngOnInit = function () {
        this.getOffers();
    };
    OfferComponent.prototype.getOffers = function () {
        var _this = this;
        this._offerService
            .getOffers()
            .subscribe(function (offers) {
            console.log('..component ', offers);
            _this.offers = offers;
        }, function (error) { return _this.error = error; });
    };
    OfferComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'offer',
            // template: `<div [ngClass]="{'woot-woot': details.title, brown: details.id}" class="brown">
            //               <div *ngIf="offers.exp | matchkey:['4334x','6447', '4334x']">exp</div>
            //          </div>`,
            templateUrl: 'offer.html',
            styleUrls: ['offer.css'],
            directives: [common_1.NgFor, room_thumbnail_component_1.RoomThumbnailComponent, room_basic_info_component_1.RoomBasicInfoComponent],
            pipes: [iterable_pipe_1.IterablePipe, matchkey_pipe_1.MatchkeyPipe],
            viewProviders: [],
            providers: [offer_service_1.OfferService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [offer_service_1.OfferService])
    ], OfferComponent);
    return OfferComponent;
}());
exports.OfferComponent = OfferComponent;
//# sourceMappingURL=offer.component.js.map