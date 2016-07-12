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
var offer_service_1 = require("./offer.service/offer.service");
var OfferComponent = (function () {
    function OfferComponent(_offerService) {
        this._offerService = _offerService;
        this.details = { title: 'Hotel offer', id: '100', name: 'Hilton' };
    }
    OfferComponent.prototype.ngOnInit = function () { this.getOffers(); };
    OfferComponent.prototype.getOffers = function (value) {
        this.offers = this._offerService.getOffers(value);
    };
    OfferComponent = __decorate([
        core_1.Component({
            selector: 'offer',
            templateUrl: 'app/offer/offer.html',
            styleUrls: ['app/offer/offer.css'],
            directives: [],
            pipes: [],
            viewProviders: [],
            providers: [offer_service_1.OfferService]
        }), 
        __metadata('design:paramtypes', [offer_service_1.OfferService])
    ], OfferComponent);
    return OfferComponent;
}());
exports.OfferComponent = OfferComponent;
//# sourceMappingURL=offer.component.js.map