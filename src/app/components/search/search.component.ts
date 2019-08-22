import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TvshowService } from 'src/app/services/tvshow.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  foundMovies: Array<any>;
  foundTVShows: Array<any>;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private tvShowService: TvshowService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.movieService.searchMovies(params.get('searchInput')).subscribe( data =>
      this.foundMovies = data),
    this.tvShowService.searchTVShows(params.get('searchInput')).subscribe( data =>
      this.foundTVShows = data);
    });
  }

}
