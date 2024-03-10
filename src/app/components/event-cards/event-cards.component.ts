import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimelineEvent } from '../../helper/timeline-event.helper';

@Component({
    selector: 'app-event-cards',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './event-cards.component.html',
    styleUrl: './event-cards.component.css'
})
export class EventCardsComponent {

    @Input() eventRecord: TimelineEvent | null = null;

    constructor() { }

    ngOnInit(): void { }
}
