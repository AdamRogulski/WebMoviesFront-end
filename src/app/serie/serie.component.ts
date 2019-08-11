import { Component, OnInit } from '@angular/core';
import { TvshowService } from '../services/tvshow.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  showActivity: Array<any>;

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

}
