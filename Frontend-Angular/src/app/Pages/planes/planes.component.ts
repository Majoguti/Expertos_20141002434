import { Component, OnInit } from '@angular/core';
import { PlanesService } from 'src/app/services/planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  constructor(private PlanesService: PlanesService) { }

  planes:any=[];

  ngOnInit(): void {

    this.obtenerPlanes();
  }

  obtenerPlanes() {
    this.PlanesService.obtenerPlanes().subscribe((data: any) => {
      this.planes = data;
      console.log(data);
    });
  }


  planSeleccionado(planes:any){
    console.log(planes);
  }

}



