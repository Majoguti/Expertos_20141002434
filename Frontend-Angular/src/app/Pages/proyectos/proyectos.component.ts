import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {


  idCliente: any = '';
  proyectos: any = [];
  correo: any = '';
  carpetaSeleccionada: any = '';

  constructor(private serviceCliente: ClientesService) {
    this.idCliente = JSON.parse(localStorage.getItem('idcliente') || '')._id;
  }

  formularioCarpeta = new FormGroup({
    nombreProyecto: new FormControl(),
    descripcion: new FormControl()

  });


  ngOnInit(): void {

    this.obtenerProyectos();


  }


  obtenerProyectos() {
    this.serviceCliente.obtenerCliente(this.idCliente).subscribe((data: any) => {
      console.log(data);
      this.proyectos = data.proyectos;
      //this.carpetas = data.carpetas;
    });
  }

  obtenerCarpetaSeleccionada(carpeta:any){
    this.carpetaSeleccionada = carpeta;
  }

  agregarCarpeta() {
    console.log(this.formularioCarpeta.value);

    this.serviceCliente.agregarCarpeta(this.idCliente, this.formularioCarpeta.value).subscribe((res: any) => {
      if (res.ok) {
        this.obtenerProyectos();
        console.log(res);
        Swal.fire(
          'Carpeta Craeada con Èxito!',
          'Para salir dar click!',
          'success'
        )
      }
    })
  }
  compartirCarpeta() {

    console.log(this.correo);
    console.log(this.carpetaSeleccionada);

    this.serviceCliente.compartirCarpeta(this.correo, this.carpetaSeleccionada).subscribe((data: any) => {
      this.correo = '';
      console.log(data)
      Swal.fire(
        'Se ha Compartido tu carpeta con èxito!',
        'Para salir dar click',
        'success'
      )
    });
  }



}
