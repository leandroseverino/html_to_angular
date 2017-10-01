import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  public productos: any[] = []
  public loading_products: boolean = false

  constructor(public http: Http) {

    this.load_productos()

  }

  public load_productos() {
    this.loading_products = true
      if (this.productos.length === 0) {
        this.http.get('https://controlfsite.firebaseio.com/productos_idx.json')
        .subscribe(data => {
          this.productos = data.json()
          this.loading_products = false
        })
      }
  }

}
