import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css']
})
export class ArchivosComponent implements OnInit {

  idCliente: any = '';

  constructor(private serviceCliente: ClientesService) {
    this.idCliente = JSON.parse(localStorage.getItem('idcliente') || '')._id;
  }

  archivos: any = [];

  ngOnInit(): void {

    this.obtenerArchivos();
  }

  obtenerArchivos() {
    this.serviceCliente.obtenerCliente(this.idCliente).subscribe((data: any) => {
      console.log(data);
      this.archivos = data.carpetas;
    });
  }

}
