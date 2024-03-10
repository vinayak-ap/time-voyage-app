// import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faFilter, faClose } from '@fortawesome/free-solid-svg-icons';
import { PipeTransformConfig } from '../../helper/timeline-event.helper';

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

    @Output() onsearch: EventEmitter<any> = new EventEmitter<any>();
    @Output() onfilter: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private elementRef: ElementRef,
    ) { }

    onSearch($event: Event) {
        let config: PipeTransformConfig = new PipeTransformConfig(this.searchText);
        this.onsearch.emit(config);
        let input = this.elementRef.nativeElement.querySelector('input');
        if (input) {
            input.blur();
        }
    }

    onFilter($event: Event) {
        this.onfilter.emit();
    }
}
