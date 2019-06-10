import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { SerieComponent } from './serie/serie.component';
import { HomeComponent } from './home/home.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MovieAddComponent } from './movie-add/movie-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'filmy', component: MovieComponent},
  { path: 'seriale', component: SerieComponent},
  { path: 'filmy/:id', component: MovieInfoComponent},
  { path: 'filmy/dodaj', component: MovieAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
