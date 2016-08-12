import {Component, Input} from '@angular/core';
import {IterablePipe} from '../../pipes/iterable.pipe';

@Component({
    moduleId: module.id,
    selector:'options',
    templateUrl: 'options.html',
    pipes:[IterablePipe]
})

export class OptionsComponent{
    @Input() room;
    // @ViewChild()

    constructor(){
        console.log('options comp');
    }
}
