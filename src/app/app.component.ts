import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimelineComponent } from "./components/timeline/timeline.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TimelineComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'time-voyage-app';
}
