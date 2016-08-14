import {Component, Input} from '@angular/core';
import {IterablePipe} from '../../../pipes/iterable.pipe';


@Component({
    moduleId: module.id,
    selector:'room-basic-info',
    templateUrl:'room-basic-info.html',
    styleUrls:[],
    providers:[],
    pipes:[IterablePipe]
})

export class RoomBasicInfoComponent{
    @Input() room;
    
    constructor(){
        console.log('room-basic-info component ', this.room);
    }
}
