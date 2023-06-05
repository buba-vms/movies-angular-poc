import { MovieState } from './movie.reducer';
import { createReducer, on } from '@ngrx/store';
import {
  findAllFavorites,
  addFavorite,
  removeFavorite,
} from './favorite.actions';

const initialState: MovieState[] = [];

export const favoriteReducer = createReducer(
  initialState,
  on(findAllFavorites, (state) => {
    return state;
  }),

  on(addFavorite, (state, action) => {
    const newFavorite = action.payload;
    const newArray = state;
    newArray.push(newFavorite);
    console.log(newFavorite);
    state = newArray;
    return newArray;
  })
);
