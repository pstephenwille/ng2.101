import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'options',
    templateUrl: 'options.html',
    pipes:[]
})

export class OptionsComponent{
    @Input() room;
    // @ViewChild()

    constructor(){
        console.log('options comp');
    }
}
