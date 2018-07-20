import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../nosotros.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  empleados:Array<object>;

  constructor(private empleadoService:EmpleadosService) {}
    listaDeEmpleados(){
      this.empleados = this.empleadoService.listaDeEmpleados();
    
   }

  ngOnInit() {
    this.listaDeEmpleados();
  }

}
