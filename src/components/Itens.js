import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Fragment } from "react/cjs/react.production.min";
import { data } from "../mocks/Cesta";

const Itens = () => {
  return (
    <Fragment>
      <Text style={StyleSheet.Title}>{data.itens.titulo}</Text>
      {data.itens.lista.map((item, idx) => {
        return (
          <View key={idx}>
            <Text>{item.nome}</Text>
            <Image source={item.imagem} />
          </View>
        );
      })}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontFamily: "MontserratRegular",
  },
});

export default Itens;
