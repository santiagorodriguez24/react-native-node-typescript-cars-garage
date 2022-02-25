import { StyleSheet } from "react-native";

import { Colors, Layouts, Spacing } from "styles";

export const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    ...Layouts.centered,
    padding: Spacing.size15,
  },
  list: {
    flex: 1,
    width: "100%",
  },
  card: {
    width: "100%",
    backgroundColor: Colors.Generic.white,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 2,
  },
  title: {
    color: Colors.Text.black,
    fontSize: 36,
    fontWeight: "bold",
    paddingHorizontal: Spacing.size15,
    paddingVertical: Spacing.size45,
  },
  details: {
    padding: Spacing.size15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Spacing.size10,
  },
  model: {
    color: Colors.Text.black,
    fontSize: 30,
  },
  line: {
    height: 1,
    backgroundColor: Colors.Generic.gray,
    marginVertical: Spacing.size10,
  },
  makeYear: {
    paddingVertical: Spacing.size10,
  },
});
