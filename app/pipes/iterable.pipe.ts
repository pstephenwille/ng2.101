import {Pipe, PipeTransform} from '@angular/core';

/**
 * Iterable Pipe
 *
 * It accepts Objects and [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
 *
 * Example:
 *
 *  <div *ngFor="let keyValuePair of someObject | iterable">
 *    key {{keyValuePair.key}} and value {{keyValuePair.value}}
 *  </div>
 *
 *  https://gist.github.com/amcdnl/202596c5b85cc66d7002d10bde3ab514
 */
@Pipe({name: 'iterable'})
export class IterablePipe implements PipeTransform {
    transform(iterable: any, args: any[]): any {
        let result = [];
debugger;
        if(iterable.entries) {
            iterable.forEach((key, value) => {
                result.push({key, value});
            });
        } else {
            for(let key in iterable) {
                if(iterable.hasOwnProperty(key)) {
                    result.push({key, value: iterable[key]});
                }
            }
        }

        return result;
    }
}
