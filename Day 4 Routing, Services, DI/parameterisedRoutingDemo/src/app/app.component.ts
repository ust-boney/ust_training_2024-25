import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AccoutslistComponent } from "./components/accoutslist/accoutslist.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccoutslistComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parameterisedRoutingDemo';
}
