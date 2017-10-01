import { Component } from '@angular/core';
import { AboutService } from './../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  constructor(public aboutService:AboutService) { }

}
