import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  constructor(private servicioCliente: ClientesService, private enrutador: Router, private auth: AngularFireAuth) { }

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

    this.servicioCliente.inicioSesion(this.login.value).subscribe((res: any) => {
      console.log(res);
      if (res._id) {
        localStorage.setItem('idcliente', JSON.stringify(res));
        this.enrutador.navigate(['/menu_2/perfil-user'])


      }
    })

  }


  loginGoogle() {

    let proveedor = new firebase.auth.GoogleAuthProvider;

    this.auth.signInWithPopup(proveedor).then(res => {

      let user = {
        correo: res.user?.email,
        nombre: res.user?.displayName,
        fotoPerfil: res.user?.photoURL,
      };

      console.log(res)

      this.servicioCliente.loginGoogle(user).subscribe((data: any) => {
        console.log(data);
        if (data._id) {
          localStorage.setItem('idcliente', JSON.stringify(data));
          this.enrutador.navigate(['/menu_2/perfil-user'])
        }
      });

    }).catch(err => {
      console.log(err)
    })
  }

  loginFacebok() {

    let proveedor = new firebase.auth.FacebookAuthProvider;

    this.auth.signInWithPopup(proveedor).then(res => {

      let user = {
        correo: res.user?.email,
        nombre: res.user?.displayName,
        fotoPerfil: res.user?.photoURL,
      };

      console.log(res)

      this.servicioCliente.loginGoogle(user).subscribe((data: any) => {
        console.log(data);
        if (data._id) {
          localStorage.setItem('idcliente', JSON.stringify(data));
          this.enrutador.navigate(['/menu_2/perfil-user'])
        }
      });

    }).catch(err => {
      console.log(err)
    })
  }



}
