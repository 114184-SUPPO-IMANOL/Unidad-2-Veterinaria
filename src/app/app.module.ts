import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddMascotaComponent } from './add-mascota/add-mascota.component';
import { ChangeMascotaComponent } from './change-mascota/change-mascota.component';
import { DeleteMascotaComponent } from './delete-mascota/delete-mascota.component';
import { FormsModule } from '@angular/forms';
import { ListMascotasComponent } from './list-mascotas/list-mascotas.component';
import { AddAtencionComponent } from './add-atencion/add-atencion.component';
import { ListAtencionComponent } from './list-atencion/list-atencion.component';
import { DeleteAtencionComponent } from './delete-atencion/delete-atencion.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMascotaComponent,
    ChangeMascotaComponent,
    DeleteMascotaComponent,
    ListMascotasComponent,
    AddAtencionComponent,
    ListAtencionComponent,
    DeleteAtencionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
