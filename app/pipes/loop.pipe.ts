import {Pipe, PipeTransform} from '@angular/core';
/*
 * returns the value from the matched key
 * */

@Pipe({name: 'loop'})
export class LoopPipe implements PipeTransform {
    transform(obj:any, keys:any[]):any {
        try {
            let items = '';
            Object.keys(obj).forEach((key)=>{
                if(obj[key] == true){items += `<p>${key}</p>`};
            });
            return items;
        } catch (e) {
            console.log('...pipe: keyIsTrue error ', e);
        }
    }
}
