import { Component } from '@angular/core';
import { IMascota } from '../models/mascota';
import { MascotaDataService } from '../services/mascota-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-mascota',
  templateUrl: './delete-mascota.component.html',
  styleUrls: ['./delete-mascota.component.css']
})
export class DeleteMascotaComponent {
  mascota: IMascota = {
    id: 0,
    nombre: '',
    tutor: '',
    genero: '',
    anioNacimiento: 0,
  }

  localListMascota: IMascota[] = [];  

  constructor(private mascotaService: MascotaDataService){}


  public onDelete(event: NgForm){
    if(event.value.id > 0){
      this.mascotaService.delete(event.value.id);
      alert("se elimino con exito")
      this.localListMascota = this.mascotaService.list();
      event.resetForm();
    }
  }

  ngOnInit(): void{
    this.localListMascota = this.mascotaService.list();
  }
}
