import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  column: { flex: 1 },
  heading: { fontWeight: 'bold', textDecorationLine: 'underline' },
  label: { fontWeight: 'bold' },
  listItem: { paddingBottom: 8 },
  row: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 16,
  },
  text: { paddingBottom: 8 },
});

export default styles;
