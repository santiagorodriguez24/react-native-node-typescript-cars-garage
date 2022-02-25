import React, { useEffect, useMemo, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import Heading from 'components/StyledText/Heading';
import CarCard from 'components/CarCard';

import { CarEntity } from 'store/reducers/CarsReducer';
import locales from 'constants/locales/cars';

import routeNames from 'navigation/routeNames';

import { getCars } from 'store/actions-creators/CarsActions';

import { styles } from './styles';

const Garage = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const carsFromStore = useSelector<RootStateOrAny>(
    (store) => store.cars.cars,
  ) as CarEntity[];

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const navigateToDetails = useCallback(
    (id: string): void => {
      navigation.navigate(routeNames.CarDetail, { id });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }: { item: CarEntity }): JSX.Element => {
      const { id, image, model, make, year, isFavorite = false } = item;

      return (
        <CarCard
          key={`car-item-${id}`}
          id={id}
          image={image}
          model={model}
          make={make}
          year={year}
          isFavorite={isFavorite}
          onPress={() => navigateToDetails(id)}
        />
      );
    },
    [navigateToDetails],
  );

  const carList = useMemo(() => {
    if (carsFromStore?.length) {
      return (
        <FlatList
          contentContainerStyle={styles.listContainerStyle}
          data={carsFromStore}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      );
    }
    return null;
  }, [carsFromStore]);

  return (
    <View style={styles.container}>
      <Heading styleLevel="2" style={styles.title}>
        {locales.garageTitle}
      </Heading>
      <View style={styles.list}>{carList}</View>
    </View>
  );
};

export default Garage;
