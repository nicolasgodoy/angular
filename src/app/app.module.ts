import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Rutas
import { APP_ROUTING } from './app.routes';


//Servicios
 
import {HeroesService} from './service/heroes.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeComponent } from './component/shared/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroeComponent } from './component/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent
    
    
  ],

  //Rutas
  imports: [
    BrowserModule,
    APP_ROUTING
    
  ],

  //Servicios
  providers: [HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
