import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

 
  idCliente: any = '';
  proyectos: any=[];
  
  constructor( private serviceCliente:ClientesService ) {
    this.idCliente = JSON.parse(localStorage.getItem('idcliente') || '')._id;
  }



  ngOnInit(): void {

    this.obtenerProyectos();
  }


obtenerProyectos(){
   this.serviceCliente.obtenerCliente(this.idCliente).subscribe((data:any)=>{
   console.log(data);
   this.proyectos=data.proyectos;


   });

}



}
