import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { TVShowComponent } from './components/tvshow/tvshow.component';
import { HomeComponent } from './components/home/home.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MediaAddComponent } from './components/media-add/media-add.component';
import { TvshowInfoComponent } from './components/tvshow-info/tvshow-info.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'filmy', component: MovieComponent},
  { path: 'seriale', component: TVShowComponent},
  { path: 'filmy/:id', component: MovieInfoComponent},
  { path: 'dodaj', component: MediaAddComponent},
  { path: 'seriale/:id', component: TvshowInfoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'szukaj/:searchInput', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
