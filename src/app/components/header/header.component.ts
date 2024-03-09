// import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faFilter, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [FormsModule, FontAwesomeModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    faSearch = faSearch;
    faFilter = faFilter;
    faClose = faClose;

    searchText: string = '';

    @Output() onsearch: EventEmitter<any> = new EventEmitter<any>()
    @Output() onfilter: EventEmitter<any> = new EventEmitter<any>()

    onSearch($event: Event) {
        this.onsearch.emit({ searchText: this.searchText });
    }

    onFilter($event: Event) {
        this.onfilter.emit();
    }
}
