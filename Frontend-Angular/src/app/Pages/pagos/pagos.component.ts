import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  constructor(private serviceCliente : ClientesService) { }
  clientes:any=[];

  ngOnInit(): void {
    this.obtenerCliente();
    
  }


  obtenerCliente(){

    this.serviceCliente.obtenerClientes().subscribe( ( res:any )=>{
      console.log(res);
      this.clientes = res;
    });

  }


}
