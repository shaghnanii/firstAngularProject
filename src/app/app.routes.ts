import {Routes, UrlSegment} from '@angular/router';
import {HeroesListComponent} from "./heroes-list/heroes-list.component";
import {CrisisListComponent} from "./crisis-list/crisis-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./profile/profile.component";

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'crisis', component: CrisisListComponent},
  {path: 'heroes', component: HeroesListComponent},
  {
    matcher: (url) => {
      if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
        console.log("Inside if", {consumed: url, posParams: {username: new UrlSegment(url[0].path.slice(1), {})}})
        return {consumed: url, posParams: {username: new UrlSegment(url[0].path.slice(1), {})}};
      }
      console.log("OUteise if")
      return null;
    },
    component: ProfileComponent
  },

  {path: '**', component: PageNotFoundComponent},
];
