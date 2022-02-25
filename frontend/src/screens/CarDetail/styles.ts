import { StatusBar, StyleSheet } from 'react-native';

import { ScreenDimensions } from 'hooks/useScreenDimensions';
import Platform from 'constants/platform';
import { Colors, Layouts, Spacing } from 'styles';

export const styles = StyleSheet.create({
  carImage: {
    width: '100%',
    height: ScreenDimensions.width * 0.5,
    marginVertical: Spacing.size20,
  },
  carYear: {
    color: Colors.Text.black,
    textAlign: 'center',
  },
  container: {
    ...Layouts.container,
    backgroundColor: Colors.Generic.white,
  },
  contentContainer: {
    paddingHorizontal: Spacing.size20,
    paddingBottom: Spacing.size40,
    paddingTop: Platform.isAndroid ? StatusBar.currentHeight : Spacing.size0,
  },
  starContainer: {
    ...Layouts.centered,
    marginBottom: Spacing.size20,
  },
  title: {
    color: Colors.Text.black,
    textAlign: 'center',
  },
});
