import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    {{ title }}
        <br>
        <h3> La base es: <strong> {{ base }} </strong> </h3>

        <button (click)="acumular(-base)">- {{ base }}</button>

        <span> {{ number }} </span>

        <button (click)="acumular(+base)">+ {{ base }}</button>
    `
})

export class ContadorComponent{
    title:string = 'Contador App';
    number:number = 10
    base:number = 5;
  
    acumular( base:number ){
      this.number += base;
    }
}