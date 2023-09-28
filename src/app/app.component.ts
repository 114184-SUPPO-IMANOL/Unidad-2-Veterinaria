import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica-1';
  mostrarMascota = true;

  indice: number = 0;


  public onChangeComponent(i: number){
    this.indice = i;
  }
  public onChangeCRUD(crud: string){
    if(crud == "Mascota"){
      this.mostrarMascota = true
    }
    else{
      this.mostrarMascota = false
    }
  }
}
