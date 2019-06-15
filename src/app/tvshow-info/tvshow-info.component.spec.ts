import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowInfoComponent } from './tvshow-info.component';

describe('TvshowInfoComponent', () => {
  let component: TvshowInfoComponent;
  let fixture: ComponentFixture<TvshowInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
