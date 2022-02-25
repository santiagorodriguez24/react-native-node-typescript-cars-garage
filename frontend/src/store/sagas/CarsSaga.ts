import { call, put, takeLatest } from 'redux-saga/effects'
import Api from 'api/CarsApi';

import {
    GET_CARS_REQUESTED,
    GET_CARS_SUCCEEDED,
    GET_CARS_FAILED
} from 'store/action-types';

export interface carsResponse {
    items: any[];
    default: any[];
}

// worker Saga: will be fired on GET_CARS_REQUESTED actions
function* getCars() {
    try {
        const cars: carsResponse = yield call(Api.getAll);
        yield put({ type: GET_CARS_SUCCEEDED, cars: cars.items });
    } catch (error) {
        yield put({ type: GET_CARS_FAILED, error: error });
    }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of cars. If "GET_CARS_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* CarsSaga() {
    yield takeLatest(GET_CARS_REQUESTED, getCars);
}

export default CarsSaga;