import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carpetas',
  templateUrl: './carpetas.component.html',
  styleUrls: ['./carpetas.component.css']
})
export class CarpetasComponent implements OnInit {

  idCliente: any = '';

  constructor( private serviceCliente:ClientesService ) {
    this.idCliente = JSON.parse(localStorage.getItem('idcliente') || '')._id;
  }

  carpetas:any = [];
 

  
  ngOnInit(): void {
    
    this.obtenerCarpertas();

  }

  obtenerCarpertas(){
    this.serviceCliente.obtenerCliente(this.idCliente).subscribe((data:any)=>{
      console.log(data);
      this.carpetas = data.carpetas;
    });
  }

  


}
