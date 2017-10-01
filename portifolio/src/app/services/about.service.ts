import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class AboutService {

  public members:any[] = []
  
  constructor(public http:Http) {
    
          this.http.get('https://controlfsite.firebaseio.com/members.json')
            .subscribe( data => {
              this.members = data.json()
            })
    
       }

}
