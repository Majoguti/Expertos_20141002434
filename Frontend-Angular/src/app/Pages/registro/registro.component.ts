import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {


  cliente = {
    nombre: '',
    apellido: '',
    correo: '',
    contrasenia: ''
  }

  constructor(private clienteService: ClientesService , private route: Router) { }

  ngOnInit(): void {
  }

  crearCliente() {
    this.clienteService.añadircliente(this.cliente).subscribe((res: any) => {
      console.log(res);

       window.localStorage.setItem('cliente', JSON.stringify(res));
       this.route.navigate(['/inicio']);
       Swal.fire(
        '¡Te haz registrado a CODENOW BE con èxito!',
        'Inicia Sesiòn Ahora',
        'success'
      )
      
 
    });
    

  }
}

      
  

