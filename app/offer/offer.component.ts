import {Component} from '@angular/core';
import {OfferService} from "./offer.service/offer.service";
import {HTTP_PROVIDERS} from "@angular/http";

@Component({
    selector:'offer',
    templateUrl:'app/offer/offer.html',
    styleUrls:['app/offer/offer.css'],
    directives:[],
    pipes:[],
    viewProviders:[],
    providers:[OfferService, HTTP_PROVIDERS]
})

export class OfferComponent {
    // offers: Promise<Offer[]>;
    errorMessage: string;
    offers = [];
    error: any;
    
    constructor(private _offerService: OfferService){}
    
    ngOnInit(){
        this.getOffers();
        console.log('.......init', this);
    }
    // getOffers(value?: string){
    //     this.offers = this._offerService.getOffers(value)
    // }

    getOffers(){
        this._offerService
            .getOffers()
            .subscribe(
                offers => this.offers = offers,
                error => this.error = <any>error
            );
            // .then(offers => {
            //     console.log('...get ', this);
            //     this.offers = offers;
            // })
            // .catch(error => this.error = error);
    }

    
    details = {title:'Hotel offer', id:'100', name:'Hilton'}
    
}




