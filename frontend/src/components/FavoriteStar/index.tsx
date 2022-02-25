import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors, HitSlop } from 'styles';

interface StarProps {
  isFavorite: boolean;
  onPress?: () => void;
}

const FavoriteStar = ({ isFavorite, onPress }: StarProps): JSX.Element => (
  <TouchableOpacity onPress={onPress} hitSlop={HitSlop}>
    <AntDesign
      size={24}
      name={isFavorite ? 'star' : 'staro'}
      color={isFavorite ? Colors.Generic.lightYellow : Colors.Generic.black}
    />
  </TouchableOpacity>
);

export default FavoriteStar;
