import React, { forwardRef, ReactNode, Ref } from 'react';
import { StyleProp, Text, TextStyle, ViewStyle, TextProps } from 'react-native';

import styles from './styles';

export type ValidBodyStyleTypeValues = 'default' | 'small' | 'large';

type ValidStyles = ViewStyle &
  Omit<TextStyle, 'fontSize' | 'fontFamily' | 'letterSpacing'>;

interface BodyProps extends TextProps {
  children?: ReactNode;
  style?: StyleProp<ValidStyles>;
  styleType: ValidBodyStyleTypeValues;
}

const Body = forwardRef(
  (
    { children, style, styleType, ...props }: BodyProps,
    bodyRef: Ref<Text>,
  ): JSX.Element => {
    const textStyles = styles[styleType];

    return (
      <Text style={[textStyles, style]} {...props} ref={bodyRef}>
        {children}
      </Text>
    );
  },
);

Body.displayName = 'Body';

export default Body;
