import {Component, enableProdMode, ViewChildren, QueryList} from '@angular/core';
import {NgFor} from '@angular/common';
import {OfferService} from "./offer.service/offer.service";
import {Http, HTTP_PROVIDERS} from "@angular/http";
import {IterablePipe} from '../pipes/iterable.pipe';
import {MatchkeyPipe} from '../pipes/matchkey.pipe';
import {KeyIsTruePipe} from '../pipes/keyIsTrue.pipe';
import {RoomTypeComponent} from './room-type/room-type.component';
import {OptionsComponent} from './options/options.component';

import {RoomBasicInfoComponent} from './room-type/room-basic-info/room-basic-info.component';

// enableProdMode();

@Component({
    moduleId: module.id,
    selector: 'offer',
    templateUrl:'offer.html',
    styleUrls: ['offer.css'],
    directives: [NgFor, RoomTypeComponent, OptionsComponent],
    pipes: [IterablePipe, MatchkeyPipe, KeyIsTruePipe],
    viewProviders: [],
    providers: [OfferService, HTTP_PROVIDERS]
})

export class OfferComponent {
    offers = [];
    ugh = [];
    error:any;
    // @ViewChildren(RoomTypeComponent, RoomBasicInfoComponent) child:QueryList<RoomTypeComponent, RoomBasicInfoComponent>;

    constructor(private _offerService:OfferService, private http: Http) {}

    ngOnInit() {
        this.getOffers();
    }

    getOffers() {
        this._offerService
            .getOffers()
            .subscribe(
                offers => this.offers = offers,
                error => this.error = <any>error
            );
    }


    ngAfterViewInit() {
        console.log('ngAfterViewInit ', this.offers);

    }

    details = {title: 'Hotel offer', id: '100', name: 'Hilton'}

}




