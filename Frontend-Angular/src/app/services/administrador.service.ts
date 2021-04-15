import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3100/administrador';


  obtenerAdministradores() {
    return this.http.get(this.url);
  }
  //http://localhost:3100/administrador/607623fc9bebae352016fe77
  obtenerAdministrador(id:any) {
    return this.http.get(this.url+'/'+id);
  }


  //http://localhost:3100/administrador/loginAdministrador
  inicioSesion(data:any) {
    return this.http.post(this.url + '/loginAdministrador', data);
  }



  subirFoto(data:FormData){
    return this.http.post('https://api.cloudinary.com/v1_1/dldv6y7ah/image/upload', data)
  }

  actualizarFoto(data:any, idAdministrador:any){
    return this.http.put(this.url+'/'+idAdministrador+'/actualizarFotoPerfil/', data)
  }

}
