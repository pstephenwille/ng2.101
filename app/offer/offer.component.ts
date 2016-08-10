import {Component, enableProdMode, ViewChildren, QueryList} from '@angular/core';
import {NgFor} from '@angular/common';
import {OfferService} from "./offer.service/offer.service";
import {Http, HTTP_PROVIDERS} from "@angular/http";
import {IterablePipe} from '../pipes/iterable.pipe';
import {MatchkeyPipe} from '../pipes/matchkey.pipe';
import {KeyIsTruePipe} from '../pipes/keyIsTrue.pipe';
import {RoomTypeComponent} from './room-type/room-type.component';
import {OptionsComponent} from './options/options.component';

import {RoomThumbnailComponent} from './room-type/room-thumbnail/room-thumbnail.component';
import {RoomBasicInfoComponent} from './room-type/room-basic-info/room-basic-info.component';

// enableProdMode();

var data2 = require('data/data.amd.js')();

@Component({
    moduleId: module.id,
    selector: 'offer',
    template: `
        <div>{{ugh}}</div>
    `,
    // templateUrl:'offer.html',
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

    constructor(private _offerService:OfferService, private http: Http) {
    }

    ngOnInit() {
        // this.getOffers();
         this.getData();
    }

    getOffers() {
        this._offerService
            .getOffers()
            .subscribe(
                offers => {
                    console.log('...component ', offers);
                    this.offers = offers
                },
                error => this.error = <any>error
            );
    }

    getData(){
        this.http.get('data/offers.json')
            .map(res=>res.json().data)
            .subscribe(data => this.ugh = data);
    }


    ngAfterViewInit() {
        console.log('ngAfterViewInit ', this.ugh);

    }

    details = {title: 'Hotel offer', id: '100', name: 'Hilton'}

}




