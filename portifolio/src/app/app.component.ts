import { Component } from '@angular/core';
import { InformationService } from './services/information.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public infoService:InformationService,
              public productService: ProductosService) {

  }
}
