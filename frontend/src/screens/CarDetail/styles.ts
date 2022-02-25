import { StyleSheet } from "react-native";
import { ScreenDimensions } from "hooks/useScreenDimensions";

import { Colors, Layouts, Spacing } from "styles";

export const styles = StyleSheet.create({
  carImage: {
    width: "100%",
    height: ScreenDimensions.width * 0.5,
    marginVertical: Spacing.size20,
  },
  carYear: {
    color: Colors.Text.black,
    textAlign: 'center',
  },
  container: {
    ...Layouts.container,
    padding: Spacing.size20,
  },
  title: {
    color: Colors.Text.black,
    textAlign: 'center',
  },
});
