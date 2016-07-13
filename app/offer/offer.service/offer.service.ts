import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';

// import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

export class Offer{
    constructor(public fromStayDate: string){}
}

@Injectable()
export class OfferService{
    private _offersUrl = 'data/offers.json';

    constructor(private _http: Http){}

    // getOffers = () =>
    //     [
    //         {id:1, name:'offer one'},
    //         {id:2, name:'offer two'},
    //         {id:3, name:'offer three'}
    //     ];


    getOffers(value?: string){
        return this._http.get(this._offersUrl)
            .map((response: Response)=> <Offer[]>response.json())
            .do(data => console.log(data))
            .catch(this.handleError)
    }
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

    private handleError(error: Response){
        // console.error(error);
        return Observable.throw(error.json().error ||'server error');
        // return Promise.reject(error);
    }





}
