import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'room-thumbnail',
    templateUrl:'room-thumbnail.html',
    styleUrls:[],
    providers:[]
})

export class RoomThumbnailComponent{
    @Input() photos;
    @Input() room;
    constructor(){
        console.log('room-thumbnail component');
    }
}
