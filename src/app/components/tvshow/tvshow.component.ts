import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { TvshowService } from 'src/app/services/tvshow.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TVShowComponent implements OnInit {

  showActivity: Array<any>;
  sortedByTitleAsc: boolean;
  sortedByDateAsc: boolean;
  sortedByRateAsc: boolean;
  searchTitle: string;
  filteredArray = false;

  constructor(private tvshowservice: TvshowService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.tvshowservice.getUserActivity().subscribe( data => {
      this.showActivity = data; });
  }

  delete(myshowId: number) {
    if (confirm('Czy na pewno chcesz usunąć ten post?')) {
      this.tvshowservice.deleteMyShow(myshowId).subscribe( data => {
        this.snackBar.open('Usunięto post!', 'OK', { duration: 3000});
        this.ngOnInit(); }); }
  }

  sort(sortBy: string) {
  if ( sortBy === 'title') {
    this.showActivity.sort( (a, b) => a.tvShow.title.localeCompare(b.tvShow.title)),
    this.sortedByTitleAsc = true; }
  if ( sortBy === 'rate') {
    this.showActivity.sort( (a, b) => b.rate - a.rate),
    this.sortedByRateAsc = true; }
  if ( sortBy === 'date') {
    this.showActivity.sort( (a, b) => a.creationTime.localeCompare(b.creationTime)),
    this.sortedByDateAsc = true; }
  if ( sortBy === 'titleDesc') {
    this.showActivity.sort( (a, b) => b.tvShow.title.localeCompare(a.tvShow.title)),
    this.sortedByTitleAsc = false; }
  if ( sortBy === 'rateDesc') {
    this.showActivity.sort( (a, b) => a.rate - b.rate),
    this.sortedByRateAsc = false; }
  if ( sortBy === 'dateDesc') {
    this.showActivity.sort( (a, b) => b.creationTime.localeCompare(a.creationTime)),
    this.sortedByDateAsc = false; }
}

findTitle() {
  const foundedShows = this.showActivity.filter( x => x.tvShow.title.toLowerCase().includes(this.searchTitle));
  this.showActivity = foundedShows;
  this.filteredArray = true;
}

resetFilter() {
  this.ngOnInit();
  this.filteredArray = false;
}

}
