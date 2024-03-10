import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TimelineEvent } from '../../helper/timeline-event.helper';

@Component({
    selector: 'app-event-details',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './event-details.component.html',
    styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {

    eventRecord: TimelineEvent | null = null;

    constructor(public modalRef: BsModalRef) { }

    ngOnInit(): void { }
}
