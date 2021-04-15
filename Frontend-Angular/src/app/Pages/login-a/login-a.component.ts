import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministradorService } from 'src/app/services/administrador.service';


@Component({
  selector: 'app-login-a',
  templateUrl: './login-a.component.html',
  styleUrls: ['./login-a.component.css']
})
export class LoginAComponent implements OnInit {

  constructor(private servicioAdministrador: AdministradorService, private enrutador: Router) { }

  ngOnInit(): void {
  }
  login = new FormGroup(
    {
      correo: new FormControl(),
      contrasenia: new FormControl()
    }
  )


  inicio() {
    console.log(this.login.value);

    this.servicioAdministrador.inicioSesion(this.login.value).subscribe((res: any) => {
      console.log(res);
      if (res._id) {
        localStorage.setItem('idadministrador', JSON.stringify(res));
        this.enrutador.navigate(['/menu'])
      }
    })

  }




}
