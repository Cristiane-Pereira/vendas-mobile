import React from "react";
import { StyleSheet, Text } from "react-native";

export function TextCustom({ children, styleCustom, styleBoldCustom }) {
  return (
    <Text style={[styleCustom, styleBoldCustom, styles.text]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
  },
  text_bold: {
    fontFamily: "MontserratBold",
  },
});
