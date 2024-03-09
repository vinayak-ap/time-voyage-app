import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { ModalModule, BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
// import { FormsModule } from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

import { EventDetailsComponent } from '../event-details/event-details.component';
import { EventFilterComponent } from '../event-filter/event-filter.component';
import { HeaderComponent } from "../header/header.component";
import { PipeTransformConfig, FilterOptions, TimelineEvent, timelineEvents } from "../../helper/timeline-event.helper";
import { EventFilterPipe } from "../../pipes/event-filter.pipe";

@Component({
    selector: 'app-timeline-interface',
    standalone: true,
    imports: [CommonModule, ModalModule, HeaderComponent, EventDetailsComponent, EventFilterComponent, EventFilterPipe],
    providers: [BsModalService],
    templateUrl: './timeline-interface.component.html',
    styleUrl: './timeline-interface.component.css'
})
export class TimelineInterfaceComponent {

    timelineWidth: number = 0;
    hoveredEvent: any;
    timelineEvents: Array<TimelineEvent> = timelineEvents;
    modalRef: BsModalRef | null = null;

    // faSearch = faSearch;
    // faFilter = faFilter;

    searchText: string = '';
    config: PipeTransformConfig = {} as PipeTransformConfig;

    constructor(
        private elementRef: ElementRef,
        private modalService: BsModalService,
    ) { }

    ngOnInit(): void { }

    handleTimelineScroll($event: MouseEvent) {
        let timeline = this.elementRef.nativeElement.querySelector('.timeline');
        let wrapper = this.elementRef.nativeElement.querySelector('.timeline-wrapper');

        if (wrapper.clientWidth > timeline.clientWidth) {
            this.resetTimeline();
            return;
        }
        let scrollWidth = $event.pageX / wrapper.clientWidth * (wrapper.clientWidth - timeline.clientWidth);
        timeline.style.left = scrollWidth.toFixed(1) + 'px';
    }

    handleSearch($event: any) {
        this.config = (($event && $event.searchText) ? $event : {}) as PipeTransformConfig;
        this.resetTimeline();
    }

    onMouseEnter(timelineEvent: TimelineEvent) {
        this.hoveredEvent = timelineEvent;
    }

    onMouseLeave(timelineEvent: TimelineEvent) {
        this.hoveredEvent = null;
    }

    openEventCard(timelineEvent: TimelineEvent) {
        let initialState: any = { eventRecord: timelineEvent };
        this.modalRef = this.modalService.show(EventDetailsComponent, { initialState, class: 'modal-dialog-centered' });
    }

    openFilterPanel($event: Event) {
        this.modalRef = this.modalService.show(EventFilterComponent, { class: 'modal-dialog-centered' });
        this.modalRef.content.onsubmit.subscribe((formData: FilterOptions) => {
            let config = {} as PipeTransformConfig;
            config.isFilterApplied = true;
            config.filterOptions = formData;
            this.config = config;
            this.resetTimeline();
        });
    }

    resetTimeline() {
        let timeline = this.elementRef.nativeElement.querySelector('.timeline');
        timeline.style['left'] = 'auto';
        timeline.style['justify-content'] = 'center';
    }

}
