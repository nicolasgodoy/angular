import { Component, OnInit } from '@angular/core';
import { Heroes, HeroesService } from '../../service/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  
})
export class HeroesComponent implements OnInit {


  heroes:Heroes[] = [] ;


  constructor( private _heroesService:HeroesService, 
               private router:Router) {   //importar servicios
    

  } 


  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe (idx:number){
    this.router.navigate ( ['./heroe',idx] )
  }

} 