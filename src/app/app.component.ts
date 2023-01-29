import { Component, inject, VERSION } from '@angular/core';
import { PlaceholderService } from './services/placeholder.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  #placeholderService = inject(PlaceholderService);

  getData() {
    this.#placeholderService.getPosts().subscribe();
  }
}
