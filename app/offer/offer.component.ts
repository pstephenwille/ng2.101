import {Component} from '@angular/core';
import {Offer, OfferService} from "./offer.service/offer.service";

@Component({
    selector:'offer',
    templateUrl:'app/offer/offer.html',
    styleUrls:['app/offer/offer.css'],
    directives:[],
    pipes:[],
    viewProviders:[],
    providers:[OfferService]
})

export class OfferComponent {
    offers: Promise<Offer[]>;
    errorMessage: string;
    
    constructor(private _offerService: OfferService){}
    
    ngOnInit(){ this.getOffers(); }
    getOffers(value?: string){
        this.offers = this._offerService.getOffers(value)
    }
    
    details = {title:'Hotel offer', id:'100', name:'Hilton'}
    
}




