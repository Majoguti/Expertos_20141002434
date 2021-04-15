import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {

  }

  url: string = 'http://localhost:3100/cliente';

  obtenerClientes() {
    return this.http.get(this.url);
  }
  //http://localhost:3100/cliente/6071164f589ded32d83e6ac4
  obtenerCliente(id: any) {
    return this.http.get(this.url + '/' + id);
  }


  //http://localhost:3100/cliente/loginCliente
  inicioSesion(data: any) {
    return this.http.post(this.url + '/loginCliente', data);
  }

  subirFoto(data: FormData) {
    return this.http.post('https://api.cloudinary.com/v1_1/dldv6y7ah/image/upload', data)
  }

  actualizarFoto(data: any, idCliente: any) {
    return this.http.put(this.url + '/' + idCliente + '/actualizarFotoPerfil/', data)
  }


  //http://localhost:3100/cliente/6071164f589ded32d83e6ac4/proyectos/60712db56b2d972b00b38453/archivos

  obtenerArchivos(idCliente: any, idProyectos: any) {
    return this.http.get(this.url + '/' + idCliente + '/proyectos/' + idProyectos + '/archivos/');
  }



  //http://localhost:3100/cliente/6071164f589ded32d83e6ac4/proyectos/60712db56b2d972b00b38453/archivos

  agregarArchivos(idCliente: any, idProyectos: any, data: any) {
    return this.http.put(this.url + '/' + idCliente + '/proyectos/' + idProyectos + '/archivos/', data);
  }


  //http://localhost:3100/cliente/6071164f589ded32d83e6ac4/proyectos

  agregarCarpeta(idCliente:any, data:any ){
    return this.http.put(this.url+ '/'+ idCliente+ '/proyectos/',data)
  }

  //http://localhost:3100/cliente/compartir-carpetas/majobob_1995@hotmail.com

  compartirCarpeta(correo:any, data:any){
    return this.http.put(this.url+ '/compartir-carpetas/'+ correo, data)

  }
  //http://localhost:3100/cliente/compartir-archivos/majobob_1995@hotmail.com
  compartirArchivo(correo:any, data:any){
    return this.http.put(this.url+ '/compartir-archivos/'+ correo, data)

  }

}
