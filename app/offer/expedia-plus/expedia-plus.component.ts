import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'expedia-plus',
    templateUrl:'expedia-plus.html',
    styleUrls:[],
    providers:[]
})

export class ExpediaPlusComponent{
    @Input() room;
    constructor(){
        console.log('expedia-plus component');
    }
}
