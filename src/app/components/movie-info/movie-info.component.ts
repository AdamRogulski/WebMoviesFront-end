import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Singlemovie } from 'src/app/model/singlemovie';
import { Useractivity } from 'src/app/model/useractivity';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { DatasharingService } from 'src/app/services/datasharing.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

 movie: Singlemovie;
 myMovie: Useractivity = new Useractivity();
 isUserLogged: boolean;
 comments: Array<any>;
 showComments = true;
 editMode = false;
 role: string;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private dataSharing: DatasharingService,
              private snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      this.movieService.getOne(params.get('id')).subscribe( m => {
        this.movie = m; }),
      this.movieService.getComments(params.get('id')).subscribe( c =>
        this.comments = c );
    });
    this.dataSharing.isUserLogged.subscribe( data =>
      this.isUserLogged = data);
    this.dataSharing.role.subscribe( data =>
        this.role = data);
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
      this.movieService.addMyMovie(param.get('id'), this.myMovie).subscribe( m => {
        this.snackBar.open('Dodano!', 'Ok', {duration: 3000}),
        this.ngOnInit(); }));
  }
}
