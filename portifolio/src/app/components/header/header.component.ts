import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { InformationService } from './../../services/information.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public infoService:InformationService, private router:Router) {}

  public searchProduct(term: string) {
    this.router.navigate(['search', term])
  }

}
