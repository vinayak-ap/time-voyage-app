import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostBinding, HostListener } from '@angular/core';
import { ModalModule, BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { EventCardsComponent } from '../event-cards/event-cards.component';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { EventFilterComponent } from '../event-filter/event-filter.component';
import { HeaderComponent } from "../header/header.component";
import { ManageEventService } from '../../services/manage-event.service';
import { EventFilterPipe } from "../../pipes/event-filter.pipe";
import { PipeTransformConfig, FilterOptions, TimelineEvent } from "../../helper/timeline-event.helper";

@Component({
    selector: 'app-timeline-interface',
    standalone: true,
    imports: [CommonModule, ModalModule, HeaderComponent, EventCardsComponent, EventDetailsComponent, EventFilterComponent, EventFilterPipe],
    providers: [BsModalService],
    templateUrl: './timeline-interface.component.html',
    styleUrl: './timeline-interface.component.css'
})
export class TimelineInterfaceComponent {

    hoveredEvent: any;
    timelineEvents!: Array<TimelineEvent>;
    modalRef: BsModalRef | null = null;
    searchText: string = '';
    zoomValue: number = 20;
    config: PipeTransformConfig = {} as PipeTransformConfig;

    constructor(
        private elementRef: ElementRef,
        private modalService: BsModalService,
        private eventService: ManageEventService,
    ) { }

    ngOnInit(): void {
        this.timelineEvents = this.eventService.timelineEvents;
    }

    handleTimelineScroll($event: MouseEvent) {
        let timeline = this.elementRef.nativeElement.querySelector('.timeline');
        let wrapper = this.elementRef.nativeElement.querySelector('.timeline-wrapper');

        if (wrapper.clientWidth > timeline.clientWidth) {
            this.recenterTimeline();
            return;
        }
        let scrollWidth = $event.pageX / wrapper.clientWidth * (wrapper.clientWidth - timeline.clientWidth);
        timeline.style.left = scrollWidth.toFixed(1) + 'px';
    }

    openEventCard(timelineEvent: TimelineEvent) {
        let initialState: any = { eventRecord: timelineEvent };
        this.modalRef = this.modalService.show(EventDetailsComponent, { initialState, class: 'modal-dialog-centered' });
    }

    openFilterPanel($event: Event) {
        this.modalRef = this.modalService.show(EventFilterComponent, { class: 'modal-dialog-centered' });
        this.modalRef.content.onsubmit.subscribe((formData: FilterOptions) => {
            this.config = new PipeTransformConfig('', true, formData);
            this.recenterTimeline();
        });
    }

    handleSearch(config: PipeTransformConfig) {
        this.config = ((config && config.searchText) ? config : {}) as PipeTransformConfig;
        this.recenterTimeline();
    }

    recenterTimeline() {
        let timeline = this.elementRef.nativeElement.querySelector('.timeline');
        timeline.style['left'] = 'auto';
        timeline.style['justify-content'] = 'center';
    }

    onMouseEnter(timelineEvent: TimelineEvent) {
        this.hoveredEvent = timelineEvent;
    }

    onMouseLeave(timelineEvent: TimelineEvent) {
        this.hoveredEvent = null;
    }

    @HostListener('window:wheel', ['$event'])
    onMouseScroll(event: WheelEvent) {
        let delta = Math.sign(event.deltaY) * -1;       //-- Invert the value for natural scroll direction
        let newValue = this.zoomValue + delta * 4;
        this.zoomValue = Math.min(Math.max(newValue, 10), 50);

        this.recenterTimeline();
    }

    onZoomChange($event: any) {
        this.zoomValue = $event.target.value;
        this.recenterTimeline();
    }

}
