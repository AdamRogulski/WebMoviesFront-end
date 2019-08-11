import { Component, OnInit, Input } from '@angular/core';
import { Singlemovie } from '../model/singlemovie';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { DatasharingService } from '../services/datasharing.service';
import { Useractivity } from '../model/useractivity';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

 movie: Singlemovie;
 myMovie: Useractivity = new Useractivity();
 isUserLogged: boolean;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private dataSharing: DatasharingService,
              private snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      this.movieService.getOne(params.get('id')).subscribe( m => {
        this.movie = m; });
    });
    this.dataSharing.isUserLogged.subscribe( data =>
      this.isUserLogged = data);
  }

  delete() {
    if (confirm('Czy na pewno chcesz usunąć ' + this.movie.title)) {
    this.route.paramMap.subscribe( params => {
      this.movieService.deleteMovie(params.get('id')).subscribe( m =>
        this.snackBar.open('Usunięto film!', 'Ok', {duration: 3000}),
        error => alert('Nie udało się usunąć filmu (' + error.error + ')'));
    }); }
  }

  update() {
    this.route.paramMap.subscribe( params => {
      this.movieService.updateMovie(params.get('id'), this.movie).subscribe( m =>
       this.snackBar.open('Zaktualizowano!', 'Ok', {duration: 3000}),
        error => alert('Nie udało się zaktualizować filmu (' + error.error + ')'));
    });
  }

  addMyMovie() {
    this.route.paramMap.subscribe( param =>
      this.movieService.addMyMovie(param.get('id'), this.myMovie).subscribe( m =>
        this.snackBar.open('Dodano do aktywności', 'Ok', {duration: 3000})));
  }
}
