import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Singlemovie } from '../singlemovie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Array<any>;
  selctedMovie: Singlemovie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getAll().subscribe( data => {
      this.movies = data;
    });
  }


}
