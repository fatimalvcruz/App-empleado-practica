import { Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { Empleado } from './empleado.model';
import { ServicioEmpleadoService } from './servicio-empleado.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadoService, private dataServide: DataServices) { 

  }

  SetEmpleado(misEmpleados: Empleado[]){
    this.empleados = misEmpleados;

  }

  obtenerEmpleados(){
    return this.dataServide.cargarEmpleados();
  }

   empleados: Empleado[]=[];

/* 
  empleados:Empleado [] = [

    new Empleado("Fatima", "Alvarez", "Presidenta", 2000),
    new Empleado("Maria", "Chen", "Stall", 1200),
    new Empleado("Carem", "Herpbur", "Actriz", 1000),
    new Empleado("Jose María", "Camacho", "Presidente", 8000)
  ]; */

  agregarEmpleadoServicio(empleado: Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar:"+ "\n" + empleado.nombre + "\n" + "Salario" + empleado.salario);
    this.empleados.push(empleado);
    this.dataServide.guardarEmpleados(this.empleados);

  }

  encontrarEmpleado(indice: number){
    let empleado: Empleado = this.empleados[indice];
    return empleado;
  

  }
  actualizarEmpleado(indice:number, empleado:Empleado){

    let empleadoModificado= this.empleados[indice];
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;
    this.dataServide.actualizarEmpleado(indice, empleado);


  }

  eliminarEmpleado(indice:number){
    this.empleados.splice(indice, 1);
    this.dataServide.eliminarEmpleado(indice);
    if(this.empleados!=null)this.dataServide.guardarEmpleados(this.empleados);
   


  }

  
} 
