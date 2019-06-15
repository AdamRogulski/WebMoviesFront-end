import { Component, OnInit } from '@angular/core';
import { Singleshow } from '../model/singleshow';
import { ActivatedRoute } from '@angular/router';
import { TvshowService } from '../services/tvshow.service';

@Component({
  selector: 'app-tvshow-info',
  templateUrl: './tvshow-info.component.html',
  styleUrls: ['./tvshow-info.component.css']
})
export class TvshowInfoComponent implements OnInit {

  tvshow: Singleshow;

  constructor(private route: ActivatedRoute, private showService: TvshowService) { }

  ngOnInit() {
    this.route.paramMap.subscribe( param =>
      this.showService.getOneShow( param.get('id')).subscribe( t =>
        this.tvshow = t));
  }

  deleteShow() {
    if (confirm('Do you want to delete this movie?')) {
      this.route.paramMap.subscribe( param =>
      this.showService.deleteShow( param.get('id')).subscribe( date =>
        alert('TV Show ' + this.tvshow.title + ' deleted')
      )); }
  }

  updateShow() {
    this.route.paramMap.subscribe(param =>
    this.showService.updateShow( param.get('id'), this.tvshow).subscribe( date =>
      alert('TV Show updated')
    ));
  }

}
