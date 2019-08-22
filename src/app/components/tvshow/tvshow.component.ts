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
