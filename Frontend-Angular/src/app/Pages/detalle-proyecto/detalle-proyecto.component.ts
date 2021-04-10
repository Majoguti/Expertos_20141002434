import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

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
  archivo:any={};

  archivos:any = [];

  ngOnInit(): void {

    // obtener elementos de la url
    this.idProyecto = this.activedRoute.snapshot.paramMap.get('idCarpeta');

    this.obtenerArchivos();

  }

  obtenerArchivos() {
    this.serviceCliente.obtenerArchivos(this.idCliente, this.idProyecto).subscribe((data: any) => {
      console.log(data);
      this.archivos = data;
    });
  }

  obtenerArchivo(data: any) {
    console.log(data);
    this.archivo = data;
  }

  compartirArchivo(){
    //this.serviceCliente.campartir(this.correo, this.archivo).
  }

  

}
