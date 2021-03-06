import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class InformationService {

  public info:any = {}
  loaded: boolean = false;

  constructor(public http:Http) {

      this.http.get('assets/data/info.page.json')
        .subscribe( data => {
          this.info = data.json()
          this.loaded = true
        })

   }

}
