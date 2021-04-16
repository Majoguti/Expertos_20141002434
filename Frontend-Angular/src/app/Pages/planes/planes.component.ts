import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  constructor() { }

  planes: any[] = [
    {
      _id: "6076698a80614c50e8cc65e5",
      cantidadProyectos: 10,
      precio: 8,
      descripcion: "5 MB por archivo"
    },
    {
      _id: "6077724fcdab7450f4995893",
      cantidadProyectos: 1,
      precio: 0,
      descripcion: "2 MB por archivo"
    },
    {
      _id: "6077727bcdab7450f4995894",
      cantidadProyectos: 25,
      precio: 12,
      descripcion: "25 MB por archivo"
    }
  ];

  ngOnInit(): void {
  }

  planSeleccionado(plan:any){
    console.log(plan)
  }


}
