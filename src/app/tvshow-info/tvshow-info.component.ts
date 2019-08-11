import { Component, OnInit } from '@angular/core';
import { Singleshow } from '../model/singleshow';
import { ActivatedRoute } from '@angular/router';
import { TvshowService } from '../services/tvshow.service';
import { DatasharingService } from '../services/datasharing.service';
import { Useractivity } from '../model/useractivity';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-tvshow-info',
  templateUrl: './tvshow-info.component.html',
  styleUrls: ['./tvshow-info.component.css']
})
export class TvshowInfoComponent implements OnInit {

  tvshow: Singleshow;
  myshow: Useractivity = new Useractivity();
  isUserLogged: boolean;

  constructor(private route: ActivatedRoute, private showService: TvshowService, private dataSharing: DatasharingService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.paramMap.subscribe( param =>
      this.showService.getOneShow( param.get('id')).subscribe( t =>
        this.tvshow = t));
    this.dataSharing.isUserLogged.subscribe( data =>
      this.isUserLogged = data );
  }

  deleteShow() {
    if (confirm('Do you want to delete this movie?')) {
      this.route.paramMap.subscribe( param =>
      this.showService.deleteShow( param.get('id')).subscribe( date =>
        this.snackBar.open('Usunięto serial!', 'Ok', {duration: 3000}),
      error => alert('Nie udało się usunąć serialu (' + error.error + ')')));
     }
  }

  updateShow() {
    this.route.paramMap.subscribe(param =>
    this.showService.updateShow( param.get('id'), this.tvshow).subscribe( date =>
      this.snackBar.open('Zaktualizowano serial!', 'Ok', {duration: 3000}),
      error => alert('Nie udało się zaktualizować serialu (' + error.error + ')')
    ));
  }

  addCommentRateStatus() {
    this.route.paramMap.subscribe(param =>
      this.showService.addMyShow(param.get('id'), this.myshow).subscribe( data =>
        this.snackBar.open('Dodano status!', 'Ok', {duration: 3000}),
        ));
  }

}
