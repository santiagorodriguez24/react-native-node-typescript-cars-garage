import {
  GET_CARS_REQUESTED,
  ADD_FAVORITE_CAR,
  REMOVE_FAVORITE_CAR,
} from 'store/action-types';

export const getCars = () => ({ type: GET_CARS_REQUESTED });

export const addFavoriteCar = (id: string) => ({
  type: ADD_FAVORITE_CAR,
  payload: { id },
});

export const removeFavoriteCar = (id: string) => ({
  type: REMOVE_FAVORITE_CAR,
  payload: { id },
});
