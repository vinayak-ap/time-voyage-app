import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TimelineEvent } from '../../helper/timeline-event.helper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faVideo, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-event-cards',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './event-cards.component.html',
    styleUrl: './event-cards.component.css'
})
export class EventCardsComponent {

    // eventRecord: TimelineEvent | null = null;

    @Input() eventRecord: TimelineEvent | null = null;

    constructor() { }

    ngOnInit(): void { }
}
