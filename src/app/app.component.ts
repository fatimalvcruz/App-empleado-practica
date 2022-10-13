import { Component, OnInit } from '@angular/core';
import  firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Listado de Empleados';

  constructor(private loginService:LoginService){

   

  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyB1X7kHQcT5XOOUdyzDEQcMmd7t53zwyIA",

      authDomain: "mis-clientes-f88b9.firebaseapp.com",

    })
   

  }


  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }
 




}
 