import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ElectronicsComponent } from "./components/electronics/electronics.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, AboutComponent, ElectronicsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servicedemo';
}
