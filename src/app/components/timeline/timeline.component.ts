import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';

import { EventCardComponent } from '../event-card/event-card.component';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
    selector: 'app-timeline',
    standalone: true,
    imports: [CommonModule, EventCardComponent, HeaderComponent, FooterComponent],
    templateUrl: './timeline.component.html',
    styleUrl: './timeline.component.css'
})
export class TimelineComponent {
    timelineWidth: number = 0;
    hoveredCard: any;
    timelineItems: any[] = [
        { title: "Event 1", date: "2022-01-01", description: "Description of Event 1" },
        { title: "Event 2", date: "2022-03-15", description: "Description of Event 2" },
        { title: "Event 3", date: "2022-06-30", description: "Description of Event 3" },
        // Add more items with detailed information
    ];

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        // Calculate and set the width of the timeline based on the number of items
        this.timelineWidth = this.timelineItems.length * 100; // Adjust multiplier as needed

        this.init();
    }

    init() {
        let timelineWrapper = this.elementRef.nativeElement.querySelector('.timeline_wrapper');
        let timelines: any = this.elementRef.nativeElement.querySelectorAll('.timeline li .data');

        for (let time of timelines) {
            // time.onclick = () => time.classList.toggle('show');
        }
        // timelineWrapper.addEventListener('mousemove', (event: any) => {
        //     let timeline = this.elementRef.nativeElement.querySelector('.timeline');
        //     let scrollWidth = event.pageX / timelineWrapper.clientWidth * (timelineWrapper.clientWidth - timeline.clientWidth);

        //     timeline.style.left = scrollWidth.toFixed(1) + 'px';
        // })

    }

    onMouseEnter() {
        console.log('Mouse over the div');
    }


    onMouseLeave() {
        console.log('Mouse out of the div');
    }

    handleTimelineScroll($event: MouseEvent) {
        let timeline = this.elementRef.nativeElement.querySelector('.timeline');
        let wrapper = this.elementRef.nativeElement.querySelector('.timeline-wrapper');

        let scrollWidth = $event.pageX / wrapper.clientWidth * (wrapper.clientWidth - timeline.clientWidth);
        timeline.style.left = scrollWidth.toFixed(1) + 'px';
    }

}
