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
var keyIsTrue_pipe_1 = require('../pipes/keyIsTrue.pipe');
var room_type_component_1 = require('./room-type/room-type.component');
var options_component_1 = require('./options/options.component');
// enableProdMode();
var OfferComponent = (function () {
    // @ViewChildren(RoomTypeComponent, RoomBasicInfoComponent) child:QueryList<RoomTypeComponent, RoomBasicInfoComponent>;
    function OfferComponent(_offerService, http) {
        this._offerService = _offerService;
        this.http = http;
        this.offers = [];
        this.ugh = [];
        this.details = { title: 'Hotel offer', id: '100', name: 'Hilton' };
    }
    OfferComponent.prototype.ngOnInit = function () {
        this.getOffers();
    };
    OfferComponent.prototype.getOffers = function () {
        var _this = this;
        this._offerService
            .getOffers()
            .subscribe(function (offers) { return _this.offers = offers; }, function (error) { return _this.error = error; });
    };
    OfferComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit ', this.offers);
    };
    OfferComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'offer',
            templateUrl: 'offer.html',
            styleUrls: ['offer.css'],
            directives: [common_1.NgFor, room_type_component_1.RoomTypeComponent, options_component_1.OptionsComponent],
            pipes: [iterable_pipe_1.IterablePipe, matchkey_pipe_1.MatchkeyPipe, keyIsTrue_pipe_1.KeyIsTruePipe],
            viewProviders: [],
            providers: [offer_service_1.OfferService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [offer_service_1.OfferService, http_1.Http])
    ], OfferComponent);
    return OfferComponent;
}());
exports.OfferComponent = OfferComponent;
//# sourceMappingURL=offer.component.js.map