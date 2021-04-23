import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { PlanesService } from 'src/app/services/planes.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-p-user',
  templateUrl: './p-user.component.html',
  styleUrls: ['./p-user.component.css']
})
export class PUserComponent implements OnInit {

  constructor(private PlanesService: PlanesService, private serviceCliente: ClientesService) { }

  planes: any = [];
  idCliente: any = '';

  ngOnInit(): void {

    this.obtenerPlanes();

    this.idCliente = JSON.parse(localStorage.getItem('idcliente') || '')._id;

  }

  obtenerPlanes() {
    this.PlanesService.obtenerPlanes().subscribe((data: any) => {
      this.planes = data;
      console.log(data);
    });
  }


  planSeleccionado(planes: any) {
    console.log(planes);
  }


  obtenerPlan(planes: any) {
    this.planSeleccionado = planes;
  }

  actualizarPlan(plan: any) {

    this.serviceCliente.actualizarPlan(this.idCliente, plan).subscribe((data:any)=>{
      console.log(data)
      if (data) {
        Swal.fire(
          'Haz adquirido un Plan!',
          'Para salir dar click',
          'success'
        )
      }
    });

  }

   
}
