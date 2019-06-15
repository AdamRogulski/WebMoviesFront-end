import { Component, OnInit, Input } from '@angular/core';
import { Singlemovie } from '../model/singlemovie';
import { MovieService } from '../services/movie.service';
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
      this.movieService.getOne(params.get('id')).subscribe( m => {
        this.movie = m; });
    });
  }

  delete() {
    if (confirm('Czy na pewno chcesz usunąć ' + this.movie.title)) {
    this.route.paramMap.subscribe( params => {
      this.movieService.deleteMovie(params.get('id')).subscribe( m =>
        alert('Usunięto'));
    }); }
  }

  update() {
    this.route.paramMap.subscribe( params => {
      this.movieService.updateMovie(params.get('id'), this.movie).subscribe( m => {
        alert('Zaktualizowano film');
      });
    });
  }
}
