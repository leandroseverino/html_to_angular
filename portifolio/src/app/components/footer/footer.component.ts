import { InformationService } from './../../services/information.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  ano: number = new Date().getFullYear()

  constructor(public infoService:InformationService) { }

}
