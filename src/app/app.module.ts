import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MovieComponent } from './components/movie/movie.component';
import { TVShowComponent} from './components/tvshow/tvshow.component';
import { HomeComponent } from './components/home/home.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MediaAddComponent } from './components/media-add/media-add.component';
import { FormsModule } from '@angular/forms';
import { TvshowInfoComponent } from './components/tvshow-info/tvshow-info.component';
import { LoginComponent } from './components/login/login.component';
import { BasicHttpInterceptorService } from './services/basic-http-interceptor.service';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { SearchComponent } from './components/search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MovieComponent,
    TVShowComponent,
    HomeComponent,
    MovieInfoComponent,
    MediaAddComponent,
    TvshowInfoComponent,
    LoginComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS, useClass: BasicHttpInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
