import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  constructor(private servicioCliente:ClientesService, private enrutador:Router) { }

  login = new FormGroup(
    {
      correo: new FormControl(),
      contrasenia: new FormControl()
    }
  )

  ngOnInit(): void {
  }

  inicio() {
    console.log(this.login.value);

    this.servicioCliente.inicioSesion(this.login.value).subscribe((res:any)=>{
      console.log(res);
      if (res._id){
        localStorage.setItem('idcliente',JSON.stringify(res));
       this.enrutador.navigate(['/menu_2'])
      }
    })

  }



}
