import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


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
