import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
        <h1>{{title}}</h1>

        <form>
            <label for="search-term" class="sr-only">Search term</label>
            <input [(ngModel)]="searchTerm" id="search-term" name="search-term" type="text" placeholder="enter your search term" />
        </form>

        <ul id="search-results">
            <li>
                <img src="img/eric.png" title="Avatar of user Eric" />
                <h2><a href="#">Eric</a></h2>
            </li>
        </ul>
    `
})

export class AppComponent {
    public title = 'People search';
    public searchTerm = '';
}