import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Singlemovie } from 'src/app/model/singlemovie';
import { Singleshow } from 'src/app/model/singleshow';
import { MovieService } from 'src/app/services/movie.service';
import { TvshowService } from 'src/app/services/tvshow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media-add',
  templateUrl: './media-add.component.html',
  styleUrls: ['./media-add.component.css']
})
export class MediaAddComponent implements OnInit {

  movie: Singlemovie = new Singlemovie();
  tvshow: Singleshow = new Singleshow()
;
  constructor(private movieService: MovieService, private tvShowService: TvshowService, private router: Router) { }

  ngOnInit() {
  }

  addMovie(): void {
    this.movieService.saveMovie(this.movie).subscribe( data => {
      alert('Movie added successfully');
      this.router.navigateByUrl('/');
        },
        (error: HttpErrorResponse) => {
          alert(error.error);
        });
  }

  addShow(): void {
    this.tvShowService.saveShow(this.tvshow).subscribe( data => {
      alert('TV Show added successfully');
      this.router.navigateByUrl('/');
        },
        (error: HttpErrorResponse) => {
          alert(error.error);
        });
  }
}
