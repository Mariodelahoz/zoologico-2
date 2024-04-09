import { Component } from '@angular/core';
import { animales } from '../interface/interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
public anima: animales[]=[];


agregarAnimales(animal: animales){
  this.anima.push(animal)}


 elimimarAnimales(animals: animales){
  this.anima= this.anima.filter((x)=>x.nombre!==animals.nombre)
}
}



 




