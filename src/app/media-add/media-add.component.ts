import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Singlemovie} from '../model/singlemovie';
import { HttpErrorResponse } from '@angular/common/http';
import { TvshowService } from '../services/tvshow.service';
import { Singleshow } from '../model/singleshow';

@Component({
  selector: 'app-media-add',
  templateUrl: './media-add.component.html',
  styleUrls: ['./media-add.component.css']
})
export class MediaAddComponent implements OnInit {

  movie: Singlemovie = new Singlemovie();
  tvshow: Singleshow = new Singleshow()
;
  constructor(private movieService: MovieService, private tvShowService: TvshowService) { }

  ngOnInit() {
  }

  addMovie(): void {
    this.movieService.saveMovie(this.movie).subscribe( data => {
      alert('Movie added successfully');
        },
        (error: HttpErrorResponse) => {
          alert(error.error);
        });
  }

  addShow(): void {
    this.tvShowService.saveShow(this.tvshow).subscribe( data => {
      alert('TV Show added successfully');
        },
        (error: HttpErrorResponse) => {
          alert(error.error);
        });
  }
}
