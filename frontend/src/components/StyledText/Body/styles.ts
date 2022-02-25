import { StyleSheet, TextStyle } from 'react-native';

import Platform from 'constants/platform';
import StyledTextUtils from 'components/StyledText/utils';

import { TypeScale } from 'styles';

const { isTablet } = Platform;

const BodyStyleByTypes: {
  [key: string]: TextStyle;
} = {
  default: isTablet ? {
    ...TypeScale.font.graphik16,
    letterSpacing: StyledTextUtils.calculateLetterSpacing(16, -0.02),
  } :
    {
      ...TypeScale.font.graphik14,
      letterSpacing: StyledTextUtils.calculateLetterSpacing(14, -0.01),
    },
  small: isTablet ? {
    ...TypeScale.font.graphik14,
    letterSpacing: StyledTextUtils.calculateLetterSpacing(14, -0.01),
  } :
    {
      ...TypeScale.font.graphik10,
      letterSpacing: StyledTextUtils.calculateLetterSpacing(10, -0.02),
    },
  large: {
    ...TypeScale.font.graphik28,
    letterSpacing: StyledTextUtils.calculateLetterSpacing(28, -0.02),
  },
};

const styles = StyleSheet.create(BodyStyleByTypes);

export default styles;
