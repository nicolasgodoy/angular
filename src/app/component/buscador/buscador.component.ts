import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service'



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

 
  heroes:any[] = []
  termino!: string;

  constructor( private activateRoute:ActivatedRoute,
              private _heroesService:HeroesService) { 
                
  }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(params => {
      this.termino = params ['termino'];
      this.heroes = this._heroesService.buscarHeroes( params ['termino'] );
      console.log(this.heroes);
    });

  }

}
