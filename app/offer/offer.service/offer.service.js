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
// import {Http, HTTP_PROVIDERS} from '@angular/http';
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var Offer = (function () {
    function Offer(fromStayDate) {
        this.fromStayDate = fromStayDate;
    }
    return Offer;
}());
exports.Offer = Offer;
var OfferService = (function () {
    function OfferService(_http) {
        this._http = _http;
        this._offersUrl = 'data/offers.json';
    }
    // getOffers = () =>
    //     [
    //         {id:1, name:'offer one'},
    //         {id:2, name:'offer two'},
    //         {id:3, name:'offer three'}
    //     ];
    OfferService.prototype.getOffers = function (value) {
        return this._http.get(this._offersUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    /*
    *  *     http.get('people.json')
     *       // Call map on the response observable to get the parsed people object
     *       .map(res => res.json())
     *       // Subscribe to the observable to get the parsed people object and attach it to the
     *       // component
     *       .subscribe(people => this.people = people);
    */
    // getOffers(value?: string){
    //     return this._http.get('/data/offers.json')
    //         .map(res => res.json())
    //         .subscribe(offer => <Offer[]>offer = offer)
    // }
    // getOffers(){
    //  this._http.get('/data/offers.json').subscribe((res:Response) => <Offer[]>res.json());
    // }
    // getOffers(){
    //     return this._http.get(this._offersUrl)
    //         .toPromise()
    //         .then(response => {response.json()})
    //         .catch(this.handleError);
    // }
    OfferService.prototype.handleError = function (error) {
        // console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'server error');
        // return Promise.reject(error);
    };
    OfferService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OfferService);
    return OfferService;
}());
exports.OfferService = OfferService;
//# sourceMappingURL=offer.service.js.map