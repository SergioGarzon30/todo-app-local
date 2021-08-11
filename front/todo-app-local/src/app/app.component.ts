import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app-local';

  nombre: string = "Sergio";
  nombreGuardado: string = "";
  edad: number = 18;
  casado: boolean = false;
  listaNombres: Array<string>=["Alejandro", "Cristian", "Sergio","Rogger"];


  guardar(){
    this.nombreGuardado = this.nombre;
    this.listaNombres.push(this.nombre);
  
  
  }
}
