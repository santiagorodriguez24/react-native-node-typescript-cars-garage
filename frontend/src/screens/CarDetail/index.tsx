import React, { useMemo, useCallback } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import Heading from 'components/StyledText/Heading';
import Body from 'components/StyledText/Body';

import { CarEntity } from 'store/reducers/CarsReducer';
import locales from 'constants/locales/cars';

import {
  addFavoriteCar,
  removeFavoriteCar,
} from 'store/actions-creators/CarsActions';

import { styles } from './styles';
import FavoriteStar from 'components/FavoriteStar';

const CarDetail = ({ route }: any): JSX.Element => {
  const { id } = route.params;
  const carsFromStore = useSelector<RootStateOrAny>(
    (store) => store.cars.cars,
  ) as CarEntity[];

  const dispatch = useDispatch();

  const toggleFavorite = useCallback(
    (carId: string, isFavorite: boolean): void => {
      if (isFavorite) {
        dispatch(removeFavoriteCar(carId));
      } else {
        dispatch(addFavoriteCar(carId));
      }
    },
    [dispatch],
  );

  const carDetails = useMemo(() => {
    const carToRender = carsFromStore.find((element: any) => element.id === id);

    if (carToRender) {
      const {
        model,
        image,
        year,
        make,
        isFavorite = false,
      } = carToRender as CarEntity;

      return (
        <>
          <Heading styleLevel="2" style={styles.title}>
            {`${make} - ${model}`}
          </Heading>
          <Body styleType="large" style={styles.title}>
            {year}
          </Body>
          <Image source={image} style={styles.carImage} />
          <View style={styles.starContainer}>
            <FavoriteStar
              isFavorite={isFavorite}
              onPress={() => toggleFavorite(id, isFavorite)}
            />
          </View>
          <Body styleType="default">{locales.carDescriptionExample}</Body>
        </>
      );
    }

    return null;
  }, [carsFromStore, id, route]);

  return (
    <ScrollView
      automaticallyAdjustContentInsets
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {carDetails}
    </ScrollView>
  );
};

export default CarDetail;
