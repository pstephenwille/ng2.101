import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'room-rate-features',
    templateUrl:'expedia-rewards.html',
    styleUrls:[],
    providers:[]
})

export class RoomRateFeaturesComponent{
    @Input() room;
    constructor(){
        console.log('room-rate-features component');
    }
}
