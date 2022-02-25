import { StyleSheet } from 'react-native';

import { Colors, Spacing, Dimensions } from 'styles';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: Colors.Generic.white,
    shadowOffset: {
      width: Dimensions.size0,
      height: Dimensions.size5,
    },
    shadowOpacity: 0.25,
    shadowRadius: Dimensions.size20,
    elevation: Dimensions.size2,
    marginBottom: Spacing.size26,
  },
  details: {
    padding: Spacing.size15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing.size10,
  },
  model: {
    color: Colors.Text.black,
  },
  line: {
    height: Dimensions.size1,
    backgroundColor: Colors.Generic.gray,
    marginVertical: Spacing.size10,
  },
  makeYear: {
    paddingVertical: Spacing.size10,
  },
});
