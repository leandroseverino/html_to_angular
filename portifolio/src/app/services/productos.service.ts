import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  public productos: any[] = []
  public filtered_products: any[] = []
  public loading_products: boolean = false

  constructor(public http: Http) {

    this.load_productos()

  }

  public load_productos() {
    this.loading_products = true

    let promisse = new Promise( (resolve, reject) => {
      this.http.get('https://controlfsite.firebaseio.com/productos_idx.json')
      .subscribe(data => {
        this.productos = data.json()
        this.loading_products = false
        resolve()
      })
    })

    return promisse

    // if (this.productos.length === 0) {
    //   this.http.get('https://controlfsite.firebaseio.com/productos_idx.json')
    //   .subscribe(data => {
    //     this.productos = data.json()
    //     this.loading_products = false
    //   })
    // }
  }

  public load_product(id: string): any {
    return this.http.get(`https://controlfsite.firebaseio.com/productos/${id}.json`)
  }

  public load_products_by_term(term: string) {
    this.loading_products = true
    
    if (this.productos.length === 0 ) {
      this.load_productos().then( () => {
        this.filter_products(term)
      })      
    } else {
      this.filter_products(term)      
    }
    
  }

  private filter_products(term: string) {
    term = term.toLowerCase()
    this.filtered_products = []
    this.productos.forEach( prod => {
      if (prod.categoria.indexOf( term ) >= 0 || prod.titulo.toLowerCase().indexOf( term ) >= 0) {
        this.filtered_products.push(prod)
      }
      
    })
    this.loading_products = false
  }
}