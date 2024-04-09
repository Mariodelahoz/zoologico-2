import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from '../main-page/main-page.component';
import { AgregarAnimalComponent } from '../agregar-animal/agregar-animal.component';
import { MostrarListadoComponent } from '../mostrar-listado/mostrar-listado.component';
import { EliminarAnimalComponent } from '../eliminar-animal/eliminar-animal.component';



@NgModule({
  declarations: [
    MainPageComponent,
    AgregarAnimalComponent,
    MostrarListadoComponent,
    EliminarAnimalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    MainPageComponent,
    AgregarAnimalComponent,
    MostrarListadoComponent,
    EliminarAnimalComponent
  ]


})
export class AnimalModuleModule { }
