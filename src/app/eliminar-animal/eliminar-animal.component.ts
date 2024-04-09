import { Component, Output } from '@angular/core';
import { animales } from '../interface/interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eliminar-animal',
  templateUrl: './eliminar-animal.component.html',
  styleUrl: './eliminar-animal.component.css'
})
export class EliminarAnimalComponent {
  @Output() elimAnimal: EventEmitter<animales>=new EventEmitter()
  animals: animales={
    nombre:"",
    sexo: ""
  }
  elimiAnimal(){
    this.elimAnimal.emit({...this.animals})
  }


}
