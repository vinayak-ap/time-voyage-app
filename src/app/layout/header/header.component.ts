// import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

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

    searchText: string = '';
}
