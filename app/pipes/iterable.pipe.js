"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
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
var IterablePipe = (function () {
    function IterablePipe() {
    }
    IterablePipe.prototype.transform = function (iterable, args) {
        var result = [];
        debugger;
        if (iterable.entries) {
            iterable.forEach(function (key, value) {
                result.push({ key: key, value: value });
            });
        }
        else {
            for (var key in iterable) {
                if (iterable.hasOwnProperty(key)) {
                    result.push({ key: key, value: iterable[key] });
                }
            }
        }
        return result;
    };
    IterablePipe = __decorate([
        core_1.Pipe({ name: 'iterable' }), 
        __metadata('design:paramtypes', [])
    ], IterablePipe);
    return IterablePipe;
}());
exports.IterablePipe = IterablePipe;
//# sourceMappingURL=iterable.pipe.js.map