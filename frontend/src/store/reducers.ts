import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import carsReducer from 'store/reducers/CarsReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favoriteCars'],
};

export default combineReducers({
  cars: persistReducer(persistConfig, carsReducer),
});
