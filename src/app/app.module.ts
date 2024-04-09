import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AgregarAnimalComponent } from './agregar-animal/agregar-animal.component';
import { MostrarListadoComponent } from './mostrar-listado/mostrar-listado.component';
import { EliminarAnimalComponent } from './eliminar-animal/eliminar-animal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AgregarAnimalComponent,
    MostrarListadoComponent,
    EliminarAnimalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
   
    


  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
