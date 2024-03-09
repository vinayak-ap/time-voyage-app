import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimelineComponent } from "./components/timeline/timeline.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, TimelineComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'time-voyage-app';
}
