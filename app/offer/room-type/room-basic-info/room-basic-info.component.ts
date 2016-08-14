import {Component, Input} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'room-basic-info',
    templateUrl: 'room-basic-info.html',
    styleUrls: [],
    providers: [],
    pipes: []
})

export class RoomBasicInfoComponent {
    @Input() room;
    offers = [];

    constructor() {}

    ngAfterContentInit(){
        this.offers = this.room.offers.map(function(offer){
            return [Object.entries(offer)];
        });
        console.log('room-basic-info component ', this.offers);
    }


    
    /**
    * The class constructor is called before any other lifecycle hook.
    * Use it to inject dependencies, but avoid any
    * serious work here.*/
    ngOnChanges(changeRecord) { }

    /**
    * Called after every change to input properties and before processing content or child views.*/
    ngOnInit() {  }

    /**
    * Called after the constructor, initializing input properties,
     * and the first call to ngOnChanges.*/
    ngDoCheck() {  }

    /**
     * Called every time that the input properties of a component or a directive are checked.
     * Use it to extend change
     *  detection by performing a custom check.*/
    // ngAfterContentInit() {  }

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
