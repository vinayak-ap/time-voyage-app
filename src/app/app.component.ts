import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimelineInterfaceComponent } from "./components/timeline/timeline-interface.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, TimelineInterfaceComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'time-voyage-app';
}
