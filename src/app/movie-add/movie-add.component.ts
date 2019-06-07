import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Singlemovie} from '../singlemovie';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  movie: Singlemovie = new Singlemovie();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  addMovie(): void {
    this.movieService.saveMovie(this.movie).subscribe( data => {
      alert('Movie created successfully');
    });
  }
}
