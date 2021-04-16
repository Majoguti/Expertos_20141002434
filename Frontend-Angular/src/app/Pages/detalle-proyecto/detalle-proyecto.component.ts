import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css']
})
export class DetalleProyectoComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute, private serviceCliente: ClientesService) {

    this.idCliente = JSON.parse(localStorage.getItem('idcliente') || '')._id;
  }

  idProyecto: any = '';
  idCliente: any = '';
  archivo: any = {};
  correo: any = '';
  archivoSeleccionado: any;
  nombreProyecto: any;

  archivos: any[] = [];

  formularioArchivo = new FormGroup({
    nombre: new FormControl(),
    descripcion: new FormControl(),
    extension: new FormControl()

  });

  ngOnInit(): void {

    // obtener elementos de la url
    this.idProyecto = this.activedRoute.snapshot.paramMap.get('idCarpeta');

    this.obtenerArchivos();

  }

  obtenerArchivos() {
    this.serviceCliente.obtenerArchivos(this.idCliente, this.idProyecto).subscribe((data:any) => {
      console.log(data)
      if (data.length > 0) {
        data.forEach((item: any) => {
          if (item._id === this.idProyecto) {
            this.archivos = item.archivos;
            this.nombreProyecto = item.nombreProyecto;
          }
        });
      }
    });
  }

  obtenerArchivo(archivo: any) {
    this.archivoSeleccionado = archivo;
  }

  compartirArchivo() {

    console.log(this.correo);
    console.log(this.archivoSeleccionado);

    this.serviceCliente.compartirArchivo(this.correo, this.archivoSeleccionado).subscribe((data: any) => {
      this.correo = '';
      console.log(data)
      Swal.fire(
        '¡Se ha Compartido tu archivo con èxito!',
        'Para salir dar click',
        'success'
      )

    });
  }

  agregarArchivo() {
    console.log(this.formularioArchivo.value);

    this.serviceCliente.agregarArchivos(this.idCliente, this.idProyecto, this.formularioArchivo.value).subscribe((data: any) => {
    
      console.log(data);
      this.obtenerArchivos();
      Swal.fire(
        '¡Se ha creado tu archivo con èxito!',
        'Para salir dar click',
        'success'
      )

    })

  }



}
