import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'room-basic-info',
    templateUrl:'room-basic-info.html',
    styleUrls:[],
    providers:[]
})

export class RoomBasicInfoComponent{
    @Input() room;
    constructor(){
        console.log('room-basic-info component');
    }
}
