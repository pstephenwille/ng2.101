import {Component, enableProdMode, ViewChildren, QueryList} from '@angular/core';
import {NgFor} from '@angular/common';
import {OfferService} from "./offer.service/offer.service";
import {Http, HTTP_PROVIDERS} from "@angular/http";
import {MatchkeyPipe} from '../pipes/matchkey.pipe';
import {KeyIsTruePipe} from '../pipes/keyIsTrue.pipe';
import {RoomTypeComponent} from './room-type/room-type.component';
import {OptionsComponent} from './options/options.component';

// enableProdMode();

@Component({
    moduleId: module.id,
    selector: 'offer',
    templateUrl:'offer.html',
    styleUrls: ['offer.css'],
    directives: [NgFor, RoomTypeComponent, OptionsComponent],
    pipes: [MatchkeyPipe, KeyIsTruePipe],
    viewProviders: [],
    providers: [OfferService, HTTP_PROVIDERS]
})

export class OfferComponent {
    offers = [];
    ugh = [];
    error:any;

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

    details = {title: 'Hotel offer', id: '100', name: 'Hilton'}





    /**
    * The class constructor is called before any other lifecycle hook.
    * Use it to inject dependencies, but avoid any
    * serious work here.*/
    ngOnChanges(changeRecord) { }

    /**
    * Called after every change to input properties and before processing content or child views.*/
    // ngOnInit() {  }

    /**
    * Called after the constructor, initializing input properties,
     * and the first call to ngOnChanges.*/
    ngDoCheck() {  }

    /**
     * Called every time that the input properties of a component or a directive are checked.
     * Use it to extend change
     *  detection by performing a custom check.*/
    ngAfterContentInit() {  }

    /**
     * Called after ngOnInit when the component's or directive's content has been initialized.*/
    ngAfterContentChecked() {  }

    /**
     * Called after every check of the component's or directive's content.*/
    ngAfterViewInit() {  }

    /**
     * Called after ngAfterContentInit when the component's view has been initialized.
     * Applies to components only.*/
    ngAfterViewChecked() {  }

    /**
     * Called after every check of the component's view. Applies to components only.*/
    ngOnDestroy() {  }

    
}




