import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  usuarios = [
    {  "nombre": "Maria", "apellido": "Sanchez", "plan": "Anual","Proyectos_Creados":3, "estado": "Activo" },
  { "nombre": "Leonel", "apellido": "Martinez", "plan": "Mensual","Proyectos_Creados":4 ,"estado": "Activo" },
  {  "nombre": "Pedro", "apellido": "Velasquez", "plan": "Mensual","Proyectos_Creados":2, "estado": "Activo"},
  { "nombre": "Juan", "apellido": "Llorente", "plan": "Anual","Proyectos_Creados":1, "estado": "Activo"},
  { "nombre": "Reina", "apellido": "Duarte", "plan": "Mensual","Proyectos_Creados":2, "estado": "No-Activo" },
  { "nombre": "Fabiola", "apellido": "Lopez", "plan": "Anual","Proyectos_Creados":3, "estado": "Activo" },
  {  "nombre": "Kenia", "apellido": "Mondragon", "plan": "Gratuito","Proyectos_Creados":1, "estado": "No-Activo" },
  {  "nombre": "David", "apellido": "Gutierrez", "plan": "Mensual","Proyectos_Creados":2, "estado": "Activo" },
  { "nombre": "Wendy", "apellido": "Gonzales", "plan": "Anual","Proyectos_Creados":1, "estado": "No-Activo"},
  {  "nombre": "Alejandra", "apellido": "Matamoros", "plan": "Anual","Proyectos_Creados":3, "estado": "Activo" }
]

  constructor() { }

  ngOnInit(): void {
  }

}
