import {Constants} from './constants';
import {Component} from 'angular2/core';
import {FilterPipe} from './pipes/filter.pipe';
import {OrderByPipe} from './pipes/orderby.pipe';
import {NgClass} from 'angular2/common';

@Component({
    selector: 'app',
    pipes: [FilterPipe, OrderByPipe],
    templateUrl: 'app/app.html',
    directives: [NgClass]
})

export class AppComponent {
    public people = Constants.PEOPLE;
    public search = { firstName: '' };
    public sortBy = '';

    sortClick(event) {
        this.sortBy = this.sortBy ? '' : 'firstName';
    }
}