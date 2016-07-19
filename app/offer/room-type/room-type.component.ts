import {Component, Input, ViewChild} from "@angular/core";
import {RoomThumbnailComponent} from "./room-thumbnail/room-thumbnail.component";
import {RoomBasicInfoComponent} from "./room-basic-info/room-basic-info.component";

@Component({
    moduleId: module.id,
    selector: 'room-type',
    templateUrl: 'room-type.html',
    directives:[RoomThumbnailComponent, RoomBasicInfoComponent]
})

export class RoomTypeComponent {
    @Input() room;
    @ViewChild(RoomBasicInfoComponent) roomInfo:RoomBasicInfoComponent;

    constructor() {
        console.log('room-type component ');
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        console.log('..init ', this.roomInfo);
    }


}

