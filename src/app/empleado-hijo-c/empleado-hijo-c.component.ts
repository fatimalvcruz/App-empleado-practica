import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

  @Input() empleadoDelista: Empleado;

  @Input() indice:number;

  @Input() item = "";



  constructor() { }

  ngOnInit(): void {
  }


  arrayCaracteristica = [''];

  agregarCarateristica(nuevaCaracteristica: string ){
    this.arrayCaracteristica.push(nuevaCaracteristica);

  }

}



