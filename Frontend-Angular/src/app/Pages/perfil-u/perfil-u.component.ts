import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-perfil-u',
  templateUrl: './perfil-u.component.html',
  styleUrls: ['./perfil-u.component.css']
})
export class PerfilUComponent implements OnInit {

  urlFoto: any = '../../../assets/img/perfil.png';
  idCliente: any = '';

  cliente = {
    //"plan": '',
    fotoPerfil: '',
    //"proyectos": []
    //"carpetas": []
    //"archivos":[]
    //"_id": "60711c18589ded32d83e6ac5",
    nombre: '',
    apellido: '',
    correo: '',
  }

  constructor(private serviceCliente: ClientesService) {

    //this.idCliente = JSON.parse(localStorage.getItem('cliente') || '60711c18589ded32d83e6ac5');
    this.idCliente = '60774607e8287d53588c9b9b';


  }

  ngOnInit(): void {

    this.obtenerCliente();

  }

  subirFoto(event: any) {
    console.log(event.target.files[0]);

    let formData = new FormData();

    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', 'coleccion_fotos');

    this.serviceCliente.subirFoto(formData).subscribe((data: any) => {
      this.urlFoto = data.url;
      console.log(data);

      if (this.urlFoto) {
        this.actualizarFoto();
      }

    });

  }

  obtenerCliente() {
    // este metodo obtiene toda la informacion del cliente logeado

    this.serviceCliente.obtenerCliente(this.idCliente).subscribe((res: any) => {
      console.log(res);
      this.cliente = res;
    });

  }

  actualizarFoto() {
    this.serviceCliente.actualizarFoto({ fotoPerfil: this.urlFoto }, this.idCliente).subscribe((data: any) => {
      console.log(data)
      if (data) {
        this.obtenerCliente();
      }

    });
  }

}
