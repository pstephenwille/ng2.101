import {Component, enableProdMode} from '@angular/core';
import {NgFor} from '@angular/common';
import {OfferService} from "./offer.service/offer.service";
import {HTTP_PROVIDERS} from "@angular/http";
import {IterablePipe} from '../pipes/iterable.pipe';
import {MatchkeyPipe} from '../pipes/matchkey.pipe';

// enableProdMode();

@Component({
    moduleId: module.id,
    selector: 'offer',
    // template: `<div [ngClass]="{'woot-woot': details.title, brown: details.id}" class="brown">
    //              <div *ngIf="offers.exp | matchkey:['4334x','6447', '4334x']">exp</div>
    //         </div>`,
    templateUrl:'offer.html',
    styleUrls: ['offer.css'],
    directives: [NgFor],
    pipes: [IterablePipe, MatchkeyPipe],
    viewProviders: [],
    providers: [OfferService, HTTP_PROVIDERS]
})

export class OfferComponent {
    offers = [];
    error:any;

    constructor(private _offerService:OfferService) {
    }

    ngOnInit() {
        this.getOffers();
    }

    getOffers() {
        this._offerService
            .getOffers()
            .subscribe(
                offers => {
                    console.log('..component ', offers);
                    window['exp'] = offers.exp;
                    this.offers = offers
                },
                error => this.error = <any>error
            );
    }

    details = {title: 'Hotel offer', id: '100', name: 'Hilton'}

}




