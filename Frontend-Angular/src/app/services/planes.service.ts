import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor(private http: HttpClient) { 

  }

  url: string = 'https://codenowbe.herokuapp.com/planes';


  //http://localhost:3100/planes

  obtenerPlanes() {
    return this.http.get(this.url);
  }


}
