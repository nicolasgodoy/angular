import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './component/shared/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HeroesComponent } from "./component/heroes/heroes.component";
import { HeroeComponent } from './component/heroe/heroe.component';
import { BuscadorComponent} from './component/buscador/buscador.component'

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'about', component: AboutComponent },
    {path: 'heroes', component: HeroesComponent },
    {path: 'heroe/:id', component: HeroeComponent },
    {path: 'buscar/:termino', component: BuscadorComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'home' },
    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);