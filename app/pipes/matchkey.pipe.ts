import {Pipe, PipeTransform} from '@angular/core';
/*
 * returns the value from the matched key
 * */

@Pipe({name: 'matchkey'})
export class MatchkeyPipe implements PipeTransform {
    transform(obj:any, keys:any[]):any {
        try {
            if (obj && keys) {
              return keys.find(key => obj[key])
            }
        } catch (e) {
            console.log('...objectkey error ', e);
        }
    }
}
