import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { searchMovie } from '../ngrx/movie.actions';
import { MovieState } from '../ngrx/movie.reducer';
import axios from 'axios';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  isFavorite: boolean = false;
  favoriteMovies: string[] = [];

  movie$: Observable<MovieState>;
  constructor(private store: Store<{ movie: MovieState }>) {
    this.movie$ = store.select('movie');
    if (this.movie$) {
      this.movie$;
    }
  }

  setIsFavorite(movieTitle: string) {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.favoriteMovies.push(movieTitle);
    }
    if (!this.isFavorite) {
      const index = this.favoriteMovies.indexOf(movieTitle);
      console.log(index);
      for (var i = this.favoriteMovies.length - 1; i >= 0; i--) {
        if (this.favoriteMovies[i] === movieTitle) {
          this.favoriteMovies.splice(i, 1);
        }
      }
    }
    console.log(this.favoriteMovies);
  }
}
