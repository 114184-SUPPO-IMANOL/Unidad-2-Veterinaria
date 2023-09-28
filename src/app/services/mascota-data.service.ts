import { Injectable } from '@angular/core';
import { IMascota } from '../models/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaDataService {

  listMascotas: IMascota[] = [
    { id: 1, nombre: 'Luna', genero: 'Femenino', anioNacimiento: 2015, tutor: 'Juan' },
    { id: 2, nombre: 'Max', genero: 'Masculino', anioNacimiento: 2012, tutor: 'María' },
    { id: 3, nombre: 'Bella', genero: 'Femenino', anioNacimiento: 2018, tutor: 'Carlos' },
    { id: 4, nombre: 'Rocky', genero: 'Masculino', anioNacimiento: 2019, tutor: 'Ana' },
    { id: 5, nombre: 'Coco', genero: 'Masculino', anioNacimiento: 2016, tutor: 'Pedro' },
    { id: 6, nombre: 'Daisy', genero: 'Femenino', anioNacimiento: 2014, tutor: 'Laura' },
    { id: 7, nombre: 'Toby', genero: 'Masculino', anioNacimiento: 2017, tutor: 'Andrés' },
    { id: 8, nombre: 'Mia', genero: 'Femenino', anioNacimiento: 2013, tutor: 'Sofía' },
    { id: 9, nombre: 'Buddy', genero: 'Masculino', anioNacimiento: 2010, tutor: 'Diego' },
    { id: 10, nombre: 'Lola', genero: 'Femenino', anioNacimiento: 2011, tutor: 'Gabriela' },
    { id: 11, nombre: 'Duke', genero: 'Masculino', anioNacimiento: 2019, tutor: 'Alberto' },
    { id: 12, nombre: 'Zoe', genero: 'Femenino', anioNacimiento: 2017, tutor: 'Carolina' },
    { id: 13, nombre: 'Simba', genero: 'Masculino', anioNacimiento: 2015, tutor: 'Francisco' },
    { id: 14, nombre: 'Rosie', genero: 'Femenino', anioNacimiento: 2018, tutor: 'Valentina' },
    { id: 15, nombre: 'Charlie', genero: 'Masculino', anioNacimiento: 2012, tutor: 'Javier' },
  ];

  constructor() { }

  add(mascota: IMascota){
    mascota.id = this.listMascotas.length + 1;
    this.listMascotas.push(mascota);
  }

  change(mascota: IMascota, id: number){
    let i: number = this.listMascotas.findIndex(x => x.id == id);
    if(i >= 0){
      this.listMascotas[i].nombre = mascota.nombre;
      this.listMascotas[i].tutor = mascota.tutor;
      this.listMascotas[i].anioNacimiento = mascota.anioNacimiento;
      this.listMascotas[i].genero = mascota.genero;
    }
  }
  
  list(): IMascota[]{
    return this.listMascotas;
  }

  delete(id: number){
    let i: number = this.listMascotas.findIndex(x => x.id == id);
    if(i >= 0){
      this.listMascotas = this.listMascotas.filter(x => x.id != id)
    }
  }
}
