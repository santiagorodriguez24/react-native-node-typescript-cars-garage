import { StyleSheet, TextStyle } from 'react-native';

import Platform from 'constants/platform';
import StyledTextUtils from 'components/StyledText/utils';
import { TypeScale } from 'styles';

const { isTablet } = Platform;

const HeadingStylesByLevel: {
  [key: string]: TextStyle;
} = {
  '1': isTablet ? TypeScale.font.titlingGothic48 : TypeScale.font.titlingGothic40,
  '2': isTablet ? TypeScale.font.titlingGothic40 : TypeScale.font.displayH5,
  '3': isTablet ? TypeScale.font.soulCycleNumbersStraight36 : TypeScale.font.graphik30,
  '4': isTablet ?
    {
      ...TypeScale.font.graphik32,
      letterSpacing: StyledTextUtils.calculateLetterSpacing(32, -0.02),
    }
    :
    {
      ...TypeScale.font.graphik24,
      letterSpacing: StyledTextUtils.calculateLetterSpacing(24, -0.01),
    },
  '5': isTablet ?
    {
      ...TypeScale.font.graphik20,
      letterSpacing: StyledTextUtils.calculateLetterSpacing(20, -0.02),
    }
    :
    {
      ...TypeScale.font.graphik18,
      letterSpacing: StyledTextUtils.calculateLetterSpacing(18, -0.01),
    },
};

const styles = StyleSheet.create(HeadingStylesByLevel);

export default styles;
