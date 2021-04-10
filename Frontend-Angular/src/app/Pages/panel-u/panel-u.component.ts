import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-u',
  templateUrl: './panel-u.component.html',
  styleUrls: ['./panel-u.component.css']
})
export class PanelUComponent implements OnInit {

  idCliente: any = '';

  constructor() {
    this.idCliente = JSON.parse(localStorage.getItem('idcliente') || '')._id;
  }

  ngOnInit(): void {
    

  }

}
