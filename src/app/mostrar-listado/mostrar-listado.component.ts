import { Component, Input,  } from '@angular/core';
import { animales } from '../interface/interface';
@Component({
  selector: 'app-mostrar-listado',
  templateUrl: './mostrar-listado.component.html',
  styleUrl: './mostrar-listado.component.css'
})
export class MostrarListadoComponent {
@Input() public ListaHija: animales []=[]




}
