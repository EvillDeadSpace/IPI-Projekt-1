import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AboutComponent,
    MovieComponent,
    RouterLink,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Projekat_1';
}