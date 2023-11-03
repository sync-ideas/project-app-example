import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/index";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    backgroundColor: COLORS.primary,
  },
  input: {
    flex: 1,
    fontFamily: "Rubik-Bold",
    textAlign: "left",
    fontSize: 20,
  },
});
