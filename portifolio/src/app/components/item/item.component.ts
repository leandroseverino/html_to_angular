import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from './../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  producto:any = {}
  id: string = undefined

  constructor(private route: ActivatedRoute, public productService: ProductosService) {
    
    route.params.subscribe( params => {
      productService.load_product(params['id']).subscribe( res => {
        this.id = params['id']
        this.producto = res.json()
      })
    })

  }

  ngOnInit() {
    
  }
}
