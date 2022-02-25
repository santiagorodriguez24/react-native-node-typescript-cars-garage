import {
  GET_CARS_REQUESTED,
  GET_CARS_SUCCEEDED,
  GET_CARS_FAILED,
  ADD_FAVORITE_CAR,
  REMOVE_FAVORITE_CAR,
} from 'store/action-types';

import { API_BASE_ADDRESS } from 'api/CarsApi';

export interface CarEntity {
  id: string;
  image: any;
  isFavorite?: boolean;
  model: string;
  make: string;
  year: number;
}

export interface CarsState {
  cars: CarEntity[];
  favoriteCars: string[];
  loading: Boolean;
  error: String;
}

const initialState: CarsState = {
  cars: [],
  favoriteCars: [],
  loading: false,
  error: '',
};

export default function reduxSagaReducer(
  state: CarsState = initialState,
  action: any,
) {
  switch (action.type) {
    case GET_CARS_REQUESTED: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case GET_CARS_SUCCEEDED: {
      const formattedCars = action.cars.map((car: CarEntity) =>
        Object.assign({}, car, {
          image: {
            uri: `${API_BASE_ADDRESS}${car.image.url}`,
          },
          isFavorite: state.favoriteCars.includes(car.id),
        }),
      );

      return {
        ...state,
        cars: formattedCars,
        loading: false,
      };
    }
    case GET_CARS_FAILED: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    case ADD_FAVORITE_CAR: {
      const favoriteCarIndex: number = state.cars.findIndex(
        (car: CarEntity) => car.id === action.payload.id,
      );
      const updatedCars = [...state.cars];
      updatedCars[favoriteCarIndex].isFavorite = true;

      return {
        ...state,
        cars: updatedCars,
        favoriteCars: [...state.favoriteCars, action.payload.id],
      };
    }
    case REMOVE_FAVORITE_CAR: {
      const favoriteCarIndex: number = state.cars.findIndex(
        (car: CarEntity) => car.id === action.payload.id,
      );
      const updatedCars = [...state.cars];
      updatedCars[favoriteCarIndex].isFavorite = false;

      const updatedFavoriteCars = state.favoriteCars.filter(
        (carID) => carID !== action.payload.id,
      );

      return {
        ...state,
        cars: updatedCars,
        favoriteCars: updatedFavoriteCars,
      };
    }
    default: {
      return state;
    }
  }
}
