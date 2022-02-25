import React, { useCallback } from 'react';
import {
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { useScreenDimensions } from 'hooks/useScreenDimensions';

import FavoriteStar from 'components/FavoriteStar';
import Body from 'components/StyledText/Body';
import Heading from 'components/StyledText/Heading';

import {
  addFavoriteCar,
  removeFavoriteCar,
} from 'store/actions-creators/CarsActions';

import { styles } from './styles';

interface Props {
  id: string;
  image: ImageSourcePropType;
  isFavorite: boolean;
  model: string;
  make: string;
  year: number;
  onPress?: () => void;
}

const CarCard = ({
  id,
  image,
  isFavorite,
  model,
  make,
  year,
  onPress,
}: Props): JSX.Element => {
  const size = useScreenDimensions();
  const dispatch = useDispatch();

  const toggleFavorite = useCallback(
    (id: string): void => {
      if (isFavorite) {
        dispatch(removeFavoriteCar(id));
      } else {
        dispatch(addFavoriteCar(id));
      }
    },
    [dispatch, isFavorite],
  );

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={image}
        style={{
          width: '100%',
          height: size.width * 0.5,
        }}
      />
      <View style={styles.details}>
        <View style={styles.header}>
          <Heading styleLevel="3" style={styles.model}>
            {model}
          </Heading>
          <FavoriteStar
            isFavorite={isFavorite}
            onPress={() => toggleFavorite(id)}
          />
        </View>
        <View style={styles.line} />
        <Body styleType="small" style={styles.makeYear}>
          {make} | {year}
        </Body>
      </View>
    </TouchableOpacity>
  );
};

export default CarCard;
