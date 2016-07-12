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
var http_1 = require("@angular/http");
var Rx_1 = require('rxjs/Rx');
var Offer = (function () {
    function Offer() {
    }
    return Offer;
}());
exports.Offer = Offer;
var OfferService = (function () {
    function OfferService(_http) {
        this._http = _http;
    }
    // getOffers = () =>
    //     [
    //         {id:1, name:'offer one'},
    //         {id:2, name:'offer two'},
    //         {id:3, name:'offer three'}
    //     ];
    // /*Obervables with pipes */
    // getOffers(value?: string){
    //     return this._http.get('/data/offers.json')
    //         .map((response: Response)=>{
    //             let offers = <Offer[]>response.json().data
    //             if(!value) return offers;
    //             return offers.filter(o => o.name.toLowerCase().includes(value.toLowerCase()))
    //         })
    //         .do(data => console.log(data))
    //         .catch(this.handleError)
    // }
    OfferService.prototype.getOffers = function (value) {
        return this._http.get('/data/offers.json')
            .map(function (resp) { return resp.json().data; })
            .toPromise()
            .catch(this.handleError);
    };
    OfferService.prototype.handleError = function (error) {
        // console.error(error);
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