/*
 * @see {@link http://stackoverflow.com/questions/32882013/angular-2-sort-and-filter|StackOverflow answers to: 'angular 2 sort and filter' }
 */

import {Pipe} from 'angular2/core';

// # Filter Array of Objects
@Pipe({ name: 'filter' })
export class FilterPipe {
    transform(value, args) {
        if (!args[0]) {
            return value;
        } else if (value) {
            return value.filter(item => {
                for (let key in item) {
                    if ((typeof item[key] === 'string' || item[key] instanceof String) && 
                        (item[key].indexOf(args[0]) !== -1)) {

                        return true;
                    }
                }
            });
        }
    }
}