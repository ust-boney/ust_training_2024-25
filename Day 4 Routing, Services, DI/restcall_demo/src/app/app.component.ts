import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostdetailsComponent } from "./components/postdetails/postdetails.component";
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostdetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restcall_demo';
}
