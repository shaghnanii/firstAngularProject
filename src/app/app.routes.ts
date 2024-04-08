import { Routes } from '@angular/router';
import {HeroesListComponent} from "./heroes-list/heroes-list.component";
import {CrisisListComponent} from "./crisis-list/crisis-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'crisis', component: CrisisListComponent},
  {path: 'heroes', component: HeroesListComponent},
  {path: '**', component: PageNotFoundComponent}
];
