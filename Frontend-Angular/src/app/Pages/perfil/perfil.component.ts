import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/services/administrador.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  urlFoto: any = '../../../assets/img/perfil.png';
  idAdministrador: any = '';
  nombre: any;
  apellido: any;
  correo: any;

  administrador = {
    fotoPerfil: '',
    nombre: '',
    apellido: '',
    correo: '',
  }
  constructor(private serviceAdministrador: AdministradorService) { 

    this.idAdministrador = JSON.parse(localStorage.getItem('idadministrador') || '')._id;
  }

  ngOnInit(): void {

    this.obtenerAdministrador();
    this.obtenerInformacionAdministrador();
  }

  subirFoto(event: any) {
    console.log(event.target.files[0]);

    let formData = new FormData();

    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', 'coleccion_fotos');

    this.serviceAdministrador.subirFoto(formData).subscribe((data: any) => {
      this.urlFoto = data.url;
      console.log(data);

      if (this.urlFoto) {
        this.actualizarFoto();
      }

    });

  }
//  obtiene toda la informacion del administrador logeado
  obtenerAdministrador() {
    
    this.serviceAdministrador.obtenerAdministrador(this.idAdministrador).subscribe((res: any) => {
      console.log(res);
      this.administrador = res;
    });

  }

  actualizarFoto() {
    this.serviceAdministrador.actualizarFoto({ fotoPerfil: this.urlFoto }, this.idAdministrador).subscribe((data: any) => {
      console.log(data)
      if (data) {
        this.obtenerAdministrador();
      }

    });
  }

  obtenerInformacionAdministrador() {

    this.serviceAdministrador.obtenerAdministrador(this.idAdministrador).subscribe((res: any) => {
      this.nombre = res.nombre;
      this.apellido = res.apellido;
      this.correo = res.correo;
    
    })
  }


}
