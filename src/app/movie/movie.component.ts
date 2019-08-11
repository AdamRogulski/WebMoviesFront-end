import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieActivity: Array<any>;

  constructor(private movieService: MovieService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.movieService.getUserActivity().subscribe( data =>
      this.movieActivity = data );
  }

  deleteMyActivity(mymovieID: number) {
    if (confirm('Czy na pewno chcesz usunąć ten post?')) {
    this.movieService.deleteMyMovie(mymovieID).subscribe( data => {
      this.snackBar.open('Usunięto post!', 'OK', { duration: 3000});
      this.ngOnInit(); }); }
  }
}
