import React, { forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import {
  Animated,
  StyleProp,
  Text,
  TextStyle,
  TextProps,
  ViewStyle,
} from 'react-native';

import styles from './styles';

export type LabelStyleLevels = '1' | '2' | '3' | '4' | '5';

type ValidStyles = ViewStyle &
  Omit<TextStyle, 'fontSize' | 'fontFamily' | 'letterSpacing'>;

export interface LabelProps extends TextProps {
  children?: ReactNode | ReactNodeArray;
  isAnimated?: boolean;
  style?: StyleProp<ValidStyles>;
  styleLevel: LabelStyleLevels;
}

const Label = forwardRef(
  (
    { children, isAnimated, style, styleLevel, ...props }: LabelProps,
    labelRef: Ref<Text>,
  ): JSX.Element => {
    const LabelComponent = isAnimated ? Animated.Text : Text;
    const textStyles = styles[styleLevel];

    return (
      <LabelComponent style={[textStyles, style]} {...props} ref={labelRef}>
        {children}
      </LabelComponent>
    );
  },
);

Label.displayName = 'Label';

export default Label;
