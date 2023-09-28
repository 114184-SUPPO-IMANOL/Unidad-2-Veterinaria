import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IMascota } from '../models/mascota';
import { MascotaDataService } from '../services/mascota-data.service';

@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html',
  styleUrls: ['./add-mascota.component.css']
})
export class AddMascotaComponent {

  mascota: IMascota = {
    id: 0,
    nombre: '',
    tutor: '',
    genero: 'Femenino',
    anioNacimiento: 0,
  }

  constructor(private mascotaServices: MascotaDataService){}

  public onAdd(event: NgForm){
    if(event.value.anioNacimiento < 2000 || event.value.genero == null){
      return
    }
    if(event.valid){
      let nuevaMascota: IMascota = (event.value as IMascota);
      this.mascotaServices.add(nuevaMascota)
      alert("Se guardo con exito");
      event.resetForm();
    }
  }

}
