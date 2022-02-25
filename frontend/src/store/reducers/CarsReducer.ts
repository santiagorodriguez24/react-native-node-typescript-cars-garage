import {
    GET_CARS_REQUESTED,
    GET_CARS_SUCCEEDED,
    GET_CARS_FAILED
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
    loading: Boolean;
    error: String;
}

const initialState: CarsState = {
    cars: [],
    loading: false,
    error: ''
};

export default function reduxSagaReducer(state: CarsState = initialState, action: any) {
    switch (action.type) {
        case GET_CARS_REQUESTED: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case GET_CARS_SUCCEEDED: {
            const formattedCars = action.cars.map((car: CarEntity) => Object.assign(
                {},
                car,
                {
                    image: {
                        uri: `${API_BASE_ADDRESS}${car.image.url}`
                    }
                }
            )
            );

            return {
                ...state,
                cars: formattedCars,
                loading: false
            }
        }
        case GET_CARS_FAILED: {
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        }
        default: {
            return state;
        }
    }
}
