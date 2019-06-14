import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Singlemovie } from '../singlemovie';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Array<any>;
  tvshows: Array<any>;

  constructor(private movieService: MovieService, private tvshowService: TvshowService) { }

  ngOnInit() {
    this.movieService.getAll().subscribe( data => {
      this.movies = data;
    }),
    this.tvshowService.getAllShows().subscribe( tvdata => {
      this.tvshows = tvdata;
    });
  }
}
