import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieActivity: Array<any>;
  sortedByTitleAsc: boolean;
  sortedByRateAsc: boolean;
  sortedByDateAsc: boolean;
  searchTitle: string;
  filteredArray = false;

  constructor(private movieService: MovieService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.movieService.getUserActivity().subscribe( data =>
      this.movieActivity = data);
  }

  deleteMyActivity(mymovieID: number) {
    if (confirm('Czy na pewno chcesz usunąć ten post?')) {
    this.movieService.deleteMyMovie(mymovieID).subscribe( data => {
      this.snackBar.open('Usunięto post!', 'OK', { duration: 3000});
      this.ngOnInit(); }); }
  }

sort(sortBy: string) {
  if ( sortBy === 'title') {
    this.movieActivity.sort( (a, b) => a.movie.title.localeCompare(b.movie.title)),
    this.sortedByTitleAsc = true; }
  if ( sortBy === 'rate') {
    this.movieActivity.sort( (a, b) => b.rate - a.rate),
    this.sortedByRateAsc = true; }
  if ( sortBy === 'date') {
    this.movieActivity.sort( (a, b) => a.creationTime.localeCompare(b.creationTime)),
    this.sortedByDateAsc = true; }
  if ( sortBy === 'titleDesc') {
    this.movieActivity.sort( (a, b) => b.movie.title.localeCompare(a.movie.title)),
    this.sortedByTitleAsc = false; }
  if ( sortBy === 'rateDesc') {
    this.movieActivity.sort( (a, b) => a.rate - b.rate),
    this.sortedByRateAsc = false; }
  if ( sortBy === 'dateDesc') {
    this.movieActivity.sort( (a, b) => b.creationTime.localeCompare(a.creationTime)),
    this.sortedByDateAsc = false; }
}

findTitle() {
  const foundedShows = this.movieActivity.filter( x => x.movie.title.toLowerCase().includes(this.searchTitle));
  this.movieActivity = foundedShows;
  this.filteredArray = true;
}

resetFilter() {
  this.ngOnInit();
  this.filteredArray = false;
}
}
