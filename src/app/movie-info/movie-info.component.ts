import { Component, OnInit, Input } from '@angular/core';
import { Singlemovie } from '../singlemovie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

 movie: Singlemovie;


  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      this.movieService.getOne(params.get('id')).subscribe( m =>{
        this.movie = m; });
    });
  }

}
