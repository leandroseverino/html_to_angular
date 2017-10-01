import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from './../../services/productos.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  products: any[] = []

  constructor(private route: ActivatedRoute,
              public productService: ProductosService) {

    route.params.subscribe( params => {
       productService.load_products_by_term(params['term'])
    })
  }  

}
