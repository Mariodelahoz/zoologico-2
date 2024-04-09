import { Component, Output, EventEmitter, input } from '@angular/core';
import { animales } from '../interface/interface';

@Component({
  selector: 'app-agregar-animal',
  templateUrl: './agregar-animal.component.html',
  styleUrl: './agregar-animal.component.css'
})
export class AgregarAnimalComponent {
  @Output() emisorAnimales: EventEmitter<animales>= new EventEmitter()
  animal: animales={
    nombre: " ",
    sexo: " "
  }
  
  emitirAnimales(){
    this.emisorAnimales.emit({...this.animal})
    this.animal.nombre=" "
    this.animal.sexo=" "
    }
   
 

}
