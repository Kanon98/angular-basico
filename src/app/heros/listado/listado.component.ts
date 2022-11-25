import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent{
  heros: string[] = ['Spiderman','Hulk','Thor', 'Ironman'];

  borrarHeroes(){
    this.heros = []
  }
}


