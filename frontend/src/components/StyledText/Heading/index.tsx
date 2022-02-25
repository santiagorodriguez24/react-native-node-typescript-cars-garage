import React, { forwardRef, ReactNode } from 'react';
import {
  Animated,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
  TextProps,
} from 'react-native';

import styles from './styles';

export type HeadingStyleLevels = '1' | '2' | '3' | '4' | '5';

export type ValidStyles = ViewStyle &
  Omit<TextStyle, 'fontSize' | 'fontFamily' | 'letterSpacing'>;

interface HeadingProps extends TextProps {
  children?: ReactNode;
  isAnimated?: boolean;
  style?: StyleProp<ValidStyles>;
  styleLevel: HeadingStyleLevels;
}

const Heading = forwardRef(
  (
    { children, isAnimated, style, styleLevel, ...props }: HeadingProps,
    headingRef: React.Ref<Text>,
  ): JSX.Element => {
    const HeadingComponent = isAnimated ? Animated.Text : Text;
    const textStyles = styles[styleLevel];

    return (
      <HeadingComponent style={[textStyles, style]} {...props} ref={headingRef}>
        {children}
      </HeadingComponent>
    );
  },
);

Heading.displayName = 'Heading';

export default Heading;
