import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';

export class Offer{}

@Injectable()
export class OfferService{
    constructor(private _http: Http){}

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


    getOffers(value?: string){
        return this._http.get('/data/offers.json')
            .map((resp: Response)=><Offer[]>resp.json().data)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: Response){
        // console.error(error);
        return Observable.throw(error.json().error ||'server error');
    }





}
