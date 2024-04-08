import { Routes } from '@angular/router';
import {HeroesListComponent} from "./heroes-list/heroes-list.component";
import {CrisisListComponent} from "./crisis-list/crisis-list.component";

export const routes: Routes = [
  {path: 'crisis', component: CrisisListComponent},
  {path: 'heroes', component: HeroesListComponent},
];
