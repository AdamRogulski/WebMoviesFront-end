import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MovieComponent } from './movie/movie.component';
import { SerieComponent } from './serie/serie.component';
import { HomeComponent } from './home/home.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MediaAddComponent } from './media-add/media-add.component';
import { FormsModule } from '@angular/forms';
import { TvshowInfoComponent } from './tvshow-info/tvshow-info.component';
import { LoginComponent } from './login/login.component';
import { BasicHttpInterceptorService } from './services/basic-http-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MovieComponent,
    SerieComponent,
    HomeComponent,
    MovieInfoComponent,
    MediaAddComponent,
    TvshowInfoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS, useClass: BasicHttpInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
