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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var transformOffers = require('./transformOfferData');
var Offer = (function () {
    function Offer() {
    }
    return Offer;
}());
exports.Offer = Offer;
var OfferService = (function () {
    function OfferService(_http) {
        this._http = _http;
        this._offersUrl = 'data/offers.json';
    }
    OfferService.prototype.getOffers = function (value) {
        var _this = this;
        return this._http.get(this._offersUrl)
            .map(function (response) {
            return _this._offers = transformOffers.adaptOffers(response.json(), new Date);
            // return this._offers =<Offer[]>response.json();
        })
            .do(function () {
            _this._data = transformOffers.adaptOffers(_this._offers, new Date);
            console.log('data fetched ', _this._data);
        })
            .catch(this._handleError);
    };
    OfferService.prototype._handleError = function (error) {
        return Rx_1.Observable.throw(error.json().error || 'server error');
    };
    OfferService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OfferService);
    return OfferService;
}());
exports.OfferService = OfferService;
//# sourceMappingURL=offer.service.js.map