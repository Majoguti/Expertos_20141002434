import { Component, OnInit } from '@angular/core';
import { PlanesService } from 'src/app/services/planes.service';


@Component({
  selector: 'app-p-user',
  templateUrl: './p-user.component.html',
  styleUrls: ['./p-user.component.css']
})
export class PUserComponent implements OnInit {

  constructor(private ClientesService: PlanesService) { }

  planes: any;

 
  ngOnInit(): void {
  }

  obtenerPlanes(data: any) {
    this.ClientesService.obtenerPlanes(data).subscribe((data: any) => {
      this.planes = data.planes;
      console.log(this.planes);
    });
  }


  planSeleccionado(plan:any){
    console.log(plan)
  }


}
