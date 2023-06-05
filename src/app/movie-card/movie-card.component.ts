import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { searchMovie } from '../ngrx/movie.actions';
import { MovieState } from '../ngrx/movie.reducer';
import axios from 'axios';
import { addFavorite } from '../ngrx/favorite.actions';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  isFavorite: boolean = false;
  favoriteMovies: string[] = [];

  movie$: Observable<MovieState>;
  favorite$: Observable<MovieState[]>;

  constructor(
    private store: Store<{ movie: MovieState; favorite: MovieState[] }>
  ) {
    this.movie$ = store.select('movie');
    if (this.movie$) {
      this.movie$;
    }
    this.favorite$ = store.select('favorite');
    if (this.favorite$) {
      this.favorite$;
    }
  }

  setIsFavorite(movieTitle: MovieState) {
    this.isFavorite = !this.isFavorite;
    const payload = movieTitle;
    if (this.isFavorite) {
      this.store.dispatch(addFavorite({ payload }));
    }
    if (!this.isFavorite) {
    }
    console.log(this.favoriteMovies);
  }
}
