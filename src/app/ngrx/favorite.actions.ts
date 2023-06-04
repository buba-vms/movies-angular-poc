import { createAction, props } from '@ngrx/store';
import { MovieState } from './movie.reducer';
export const findAllFavorites = createAction(
  '[Counter Component] Find All Favorites'
);
