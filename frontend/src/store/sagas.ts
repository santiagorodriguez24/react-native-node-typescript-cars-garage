import { fork } from "redux-saga/effects";

// import all watchers
import CarsSaga from "store/sagas/CarsSaga";

function* rootSagas() {
  yield fork(CarsSaga);
}

export default rootSagas;
