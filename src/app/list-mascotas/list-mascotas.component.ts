import { Component } from '@angular/core';
import { IMascota } from '../models/mascota';
import { MascotaDataService } from '../services/mascota-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-mascotas',
  templateUrl: './list-mascotas.component.html',
  styleUrls: ['./list-mascotas.component.css']
})
export class ListMascotasComponent {
  mascota: IMascota = {
    id: 0,
    nombre: '',
    tutor: '',
    genero: '',
    anioNacimiento: 0,
  }

  localListMascota: IMascota[] = [];  

  constructor(private mascotaService: MascotaDataService){}

  public onFiltrarGenero(genero: string){
    this.mascota.genero = genero;
    this.localListMascota = this.mascotaService.list().filter(x => x.genero == this.mascota.genero);
  }
  
  //TODO: rehacer
  public onFiltrarNombre(nombre: any){
    this.localListMascota = this.mascotaService.list();
    this.mascota.nombre = nombre.target.value;
    if(this.mascota.genero == ''){
      this.localListMascota = this.buscarPalabras(this.mascota.nombre)
    }
    else{
      this.localListMascota = this.mascotaService.list().filter(x => x.genero == this.mascota.genero);
      this.localListMascota = this.buscarPalabras(this.mascota.nombre)
    }
  }

  buscarPalabras(palabraIncompleta: string): IMascota[] {
    palabraIncompleta = palabraIncompleta.toLowerCase(); // Convierte a minúsculas para hacer la búsqueda no sensible a mayúsculas

    return this.localListMascota.filter(palabra => {
      const palabraEnMinusculas = palabra.nombre.toLowerCase();
      return palabraEnMinusculas.startsWith(palabraIncompleta);
    });
  }

  ngOnInit(): void{
    this.localListMascota = this.mascotaService.list();
  }
}
