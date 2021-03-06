import { StyleSheet } from 'react-native';

import { Colors, Layouts, Spacing } from 'styles';

export const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    padding: Spacing.size15,
  },
  listContainerStyle: {
    marginTop: Spacing.size45,
    paddingBottom: Spacing.size45,
  },
  list: {
    ...Layouts.container,
  },
  title: {
    color: Colors.Text.black,
    fontWeight: 'bold',
  },
});
