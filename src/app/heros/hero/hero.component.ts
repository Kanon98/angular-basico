import { Component } from '@angular/core';

@Component ({
    selector: 'app-hero',
    templateUrl: 'hero.component.html' 
})

export class HeroComponent{
    nombre:string = 'Ironman';
    edad:number = 45;

    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${ this.nombre } ${ this.edad}`
    }

    cambiarNombre(){
        this.nombre = 'Spiderman'
    }
    cambiarEdad(){
        this.edad = 30
    }
}