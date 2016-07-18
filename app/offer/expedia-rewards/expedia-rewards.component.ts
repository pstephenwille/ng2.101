import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'expedia-rewards',
    templateUrl:'expedia-rewards.html',
    styleUrls:[],
    providers:[]
})

export class ExpediaRewardsComponent{
    @Input() room;
    constructor(){
        console.log('expedia-rewards component');
    }
}
