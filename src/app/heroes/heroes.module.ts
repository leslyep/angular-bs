import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        //Lo que se necesite que se vea fuera de este componente 
        ListadoComponent
    ],
    imports:[
        //listado de modulos
        CommonModule
    ],
})

export class HeroesModule{}