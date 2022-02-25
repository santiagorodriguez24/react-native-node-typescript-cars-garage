import React, { useEffect, useMemo, useCallback } from "react";
import { View, Image, ImageSourcePropType, } from "react-native";
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Heading from "components/StyledText/Heading";
import Body from 'components/StyledText/Body';
import CarCard from "components/CarCard";

import { CarEntity } from 'store/reducers/CarsReducer';
import locales from 'constants/locales/cars';

import {
  getCars
} from 'store/actions-creators/CarsActions';

import { styles } from "./styles";

import { useScreenDimensions } from "hooks/useScreenDimensions";
import FavoriteStar from "components/FavoriteStar";

const CarDetail = ({ route, navigation }: any) => {
  const { id } = route.params;
  const carsFromStore = useSelector<RootStateOrAny>((store) => store.cars.cars) as CarEntity[];
  const size = useScreenDimensions();

  const car = useMemo(() => {
    const carToRender = carsFromStore.find(element => element.id = id);

    if (carToRender) {
      const { model, image, year, make } = carToRender;

      return (
        <>
          <Heading
            styleLevel="2"
            style={styles.title}
          >
            {`${make} - ${model}`}
          </Heading>
          <Body styleType="large" style={styles.title}>
            {year}
          </Body>
          <Image
            source={image}
            style={styles.carImage}
          />
          <Body styleType="default">
            {locales.carDescriptionExample}
          </Body>
        </>
      );
    }

    return null;
  }, [
    carsFromStore
  ]);

  return (
    <View style={styles.container}>
      {car}
    </View>
  );
};

export default CarDetail;
