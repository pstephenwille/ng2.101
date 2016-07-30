import {Component, enableProdMode, ViewChildren, QueryList} from '@angular/core';
import {NgFor} from '@angular/common';
import {OfferService} from "./offer.service/offer.service";
import {HTTP_PROVIDERS} from "@angular/http";
import {IterablePipe} from '../pipes/iterable.pipe';
import {MatchkeyPipe} from '../pipes/matchkey.pipe';
import {KeyIsTruePipe} from '../pipes/keyIsTrue.pipe';
import {RoomTypeComponent} from './room-type/room-type.component';
import {OptionsComponent} from './options/options.component';

import {RoomThumbnailComponent} from './room-type/room-thumbnail/room-thumbnail.component';
import {RoomBasicInfoComponent} from './room-type/room-basic-info/room-basic-info.component';

// enableProdMode();


@Component({
    moduleId: module.id,
    selector: 'offer',
    template: `<div [ngClass]="{'woot-woot': details.title, brown: details.id}" class="brown">
    <!--<div *ngIf="offers.exp | matchkey:['4334x','6447', '4334x']">exp</div>-->
     <!--<div *ngIf="offers.exp && offers.exp['4334']">ok</div>-->
     <div *ngFor="let room of offers.rooms">
        room - {{rooms}} 
        <div *ngFor="let offer of room.offers">
            <div [outerHTML]="offer | keyIsTrue"></div>
        </div>
    </div>
</div>`,
    // templateUrl:'offer.html',
    styleUrls: ['offer.css'],
    directives: [NgFor, RoomTypeComponent, OptionsComponent],
    pipes: [IterablePipe, MatchkeyPipe, KeyIsTruePipe],
    viewProviders: [],
    providers: [OfferService, HTTP_PROVIDERS]
})

export class OfferComponent {
    offers = [];
    error:any;
    // @ViewChildren(RoomTypeComponent, RoomBasicInfoComponent) child:QueryList<RoomTypeComponent, RoomBasicInfoComponent>;

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
                    this.offers = offers
                },
                error => this.error = <any>error
            );
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit ');

    }

    details = {title: 'Hotel offer', id: '100', name: 'Hilton'}

}




