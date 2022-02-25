import { StyleSheet, TextStyle } from 'react-native';

import Platform from 'constants/platform';
import StyledTextUtils from 'components/StyledText/utils';
import { Spacing, TypeScale } from 'styles';

const { isTablet } = Platform;

const LabelStylesByLevel: {
  [key: string]: TextStyle;
} = {
  '1': {
    ...TypeScale.font.graphik16H16,
    letterSpacing: StyledTextUtils.calculateLetterSpacing(16, -0.02),
    // Compensate for issue on Tab bar where text was cut off on android
    marginBottom: -Spacing.size5,
    paddingBottom: Spacing.size5,
  },
  '2': isTablet ? TypeScale.font.graphik16H16 : TypeScale.font.graphik14H16,
  '3': isTablet ?
    {
      ...TypeScale.font.graphik14H16,
      letterSpacing: StyledTextUtils.calculateLetterSpacing(14, -0.01),
    }
    :
    {
      ...TypeScale.font.graphik12,
      letterSpacing: StyledTextUtils.calculateLetterSpacing(12, -0.01),
    },
  '4': isTablet ?
    {
      ...TypeScale.font.graphik12,
      letterSpacing: StyledTextUtils.calculateLetterSpacing(12, -0.01),
    }
    :
    {
      ...TypeScale.font.graphik11,
      letterSpacing: StyledTextUtils.calculateLetterSpacing(11, -0.01),
    },
  '5': isTablet ?
    {
      ...TypeScale.font.graphik12,
      letterSpacing: StyledTextUtils.calculateLetterSpacing(12, -0.01),
      textTransform: 'uppercase',
    }
    :
    {
      ...TypeScale.font.graphik11,
      letterSpacing: StyledTextUtils.calculateLetterSpacing(11, -0.01),
      textTransform: 'uppercase',
    },
};

const styles = StyleSheet.create(LabelStylesByLevel);

export default styles;
