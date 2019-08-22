import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { TvshowService } from 'src/app/services/tvshow.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Array<any>;
  tvshows: Array<any>;
  latestTVShowComments: Array<any>;
  latestMovieComments: Array<any>;

  constructor(private movieService: MovieService, private tvshowService: TvshowService) { }

  ngOnInit() {
    this.movieService.getLatestMovies().subscribe( data => {
      this.movies = data;
    }),
    this.tvshowService.getLatestShows().subscribe( tvdata => {
      this.tvshows = tvdata;
    });
    this.tvshowService.getLatestComments().subscribe( coms =>
      this.latestTVShowComments = coms);
    this.movieService.getLatestComments().subscribe( coms =>
      this.latestMovieComments = coms);
  }


}
