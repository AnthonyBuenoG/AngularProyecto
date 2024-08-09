import { Component } from '@angular/core';
import { images } from '@Constants';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent {
  readonly images = images;
}
