import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  usuarios = [
    {  "nombre": "Maria", "apellido": "Sanchez", "plan": "Anual","Pago":"Vigente", "fecha": '03/02/2020' },
  { "nombre": "Leonel", "apellido": "Martinez", "plan": "Mensual","Pago":"Vigente" ,"fecha": '05/01/2021' },
  {  "nombre": "Pedro", "apellido": "Velasquez", "plan": "Mensual","Pago":"Vigente", "fecha": '08/07/2020'},
  { "nombre": "Juan", "apellido": "Llorente", "plan": "Anual","Pago":"Vencido", "fecha": '10/05/2021'},
  { "nombre": "Reina", "apellido": "Duarte", "plan": "Mensual","Pago":"Vigente", "fecha": '23/12/2021' },
  { "nombre": "Fabiola", "apellido": "Lopez", "plan": "Anual","Pago":"Vencido", "fecha": '25/11/2021' }
  
]

  constructor() { }

  ngOnInit(): void {
  }

}
