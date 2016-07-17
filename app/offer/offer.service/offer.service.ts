import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
var transformOffers = require('./transformOfferData');

export class Offer{}

@Injectable()
export class OfferService{
    private _offersUrl = 'data/offers.json';
    private _offers;
    private _data;
    public _adaptedOffers;
    
    constructor(private _http: Http){}

    getOffers(value?: string){
        return this._http.get(this._offersUrl)
            .map((response: Response)=> {
                return this._offers = transformOffers.adaptOffers(<Offer[]>response.json(), new Date);
                // return this._offers =<Offer[]>response.json();
            })
            .do(() => {
                this._data =  transformOffers.adaptOffers(this._offers, new Date);
                console.log('data fetched ', this._data)})
            .catch(this._handleError)
    }



    private _handleError(error: Response){
        return Observable.throw(error.json().error ||'server error');
    }
}
