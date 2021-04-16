import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor(private http: HttpClient) { 

  }

  url: string = 'http://localhost:3100/cliente';

  //http://localhost:3100/planes

  obtenerPlanes(data: any) {
    return this.http.get(this.url + '/planes/',data);
  }
}
