import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TimelineEvent } from '../../helper/timeline-event.helper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faVideo, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-event-details',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './event-details.component.html',
    styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {

    eventRecord: TimelineEvent | null = null;
    faVideo = faPlayCircle;

    constructor(public modalRef: BsModalRef) { }

    ngOnInit(): void { }
}
