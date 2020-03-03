import { Injectable } from '@angular/core';
import { VariablesService } from './variables.service';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   base_url = 'http://localhost/api';
   constructor(private http: HTTP) {}

  async Login(loginData){

  	this.http.get(this.base_url+'?request=login', {}, {})
  .then(data => {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
  	return loginData;
  }

}
