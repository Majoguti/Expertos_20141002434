import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { ClientesService } from 'src/app/services/clientes.service';



@Component({
  selector: 'app-pagos-user',
  templateUrl: './pagos-user.component.html',
  styleUrls: ['./pagos-user.component.css']
})
export class PagosUserComponent implements OnInit {

  idCliente: any = '';
  nombre: any;
  descripcion: any;
  precio: any;
  cantidadProyectos: any;

plan={
  nombre:'',
  precio:'',
  cantidadProyectos:'',
  descripcion:'',


}

  cliente = {
    nombre: '',
    precio: '',
    descripcion: '',
    cantidadProyectos: '',
  }

  constructor(private serviceCliente: ClientesService) {
      
    this.idCliente = JSON.parse(localStorage.getItem('idcliente') || '')._id;
   }

  ngOnInit(): void {

    this.obtenerInformacionPlan();

  }

  Pagos() {
      Swal.fire(
        '¡Se ha realizado tu pago con èxito!',
        'Para salir dar click',
        'success'
      ) 
  }

  
  obtenerInformacionPlan() {

    this.serviceCliente.obtenerCliente(this.idCliente).subscribe((res: any) => {
      this.nombre = res.plan.nombre;
      this.descripcion = res.plan.descripcion;
      this.precio = res.plan.precio;
      this.cantidadProyectos = res.plan.cantidadProyectos;
    
    })
  }

 

}
