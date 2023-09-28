import { Component, OnInit } from '@angular/core';
import { IMascota } from '../models/mascota';
import { MascotaDataService } from '../services/mascota-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-mascota',
  templateUrl: './change-mascota.component.html',
  styleUrls: ['./change-mascota.component.css']
})
export class ChangeMascotaComponent implements OnInit {

  mascota: IMascota = {
    id: 0,
    nombre: '',
    tutor: '',
    genero: 'Femenino',
    anioNacimiento: 0,
  }

  localListMascota: IMascota[] = [];  

  constructor(private mascotaService: MascotaDataService){}

  public onChange(event: NgForm){
    if(event.valid){
      let id: number = event.value.mascota;
      if(id > 1){
        let nuevaMascota: IMascota =  (event.value as IMascota);
        this.mascotaService.change(nuevaMascota, event.value.mascota);
        alert("Se modifico con exito");
        event.resetForm();
        this.localListMascota = this.mascotaService.list();
      }
      else{
        alert("No se a encontrado la mascota")
      }
    }
  }

  public onLoadData(event: NgForm){
    let nuevaMascota: IMascota = this.localListMascota.find(x => x.id == event.value.mascota) || this.mascota;
    if(nuevaMascota.id != 0){
      this.mascota.id = nuevaMascota.id;
      this.mascota.nombre = nuevaMascota.nombre;
      this.mascota.tutor = nuevaMascota.tutor;
      this.mascota.anioNacimiento = nuevaMascota.anioNacimiento;
      this.mascota.genero = nuevaMascota.genero;
    }
  }

  ngOnInit(): void{
    this.localListMascota = this.mascotaService.list();
  }

}
