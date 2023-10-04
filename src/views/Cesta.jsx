import { Fragment } from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import Topo from "../../assets/topo.png";
import Logo from "../../assets/logo.png";

import { TextCustom } from "../components/TextCustom";
import { data } from "../mocks/Cesta";

const mobileScreens = Dimensions.get("screen").width;

export const Cesta = () => {
  return (
    <Fragment>
      <Image source={Topo} alt="topo" style={styles.Image}></Image>
      <TextCustom styleBoldCustom={styles.Detail}>{data.topo.title}</TextCustom>

      <View style={{ paddingVertical: 8, paddingHorizontal: 16 }}>
        <TextCustom styleBoldCustom={styles.Title}>
          {data.detail.title}
        </TextCustom>
        <View style={{ flexDirection: "row", paddingVertical: 12 }}>
          <Image source={Logo} alt="logo" style={styles.Logo} />
          <Text style={styles.Name}>{data.detail.name}</Text>
        </View>

        <TextCustom styleCustom={styles.Description}>
          {data.detail.description}
        </TextCustom>
        <Text style={styles.Price}>R$ {data.detail.value}</Text>

        <TouchableOpacity style={styles.Botao} onPress={() => {}}>
          <Text style={styles.TextoBotao}>{data.detail.botao}</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  Image: {
    maxWidth: "100%",
    height: (578 / 768) * mobileScreens,
  },
  Detail: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    padding: 16,
    fontSize: 16,
    lineHeight: 26,
    color: "#ffffff",
    fontWeight: "bold",
  },
  Title: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  Name: {
    fontSize: 16,
    lineHeight: 26,
    left: 12,
    fontFamily: "MontserratRegular",
  },
  Description: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  Price: {
    color: "#2a9f85",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 42,
    marginTop: 8,
    fontWeight: "bold",
  },
  Logo: {
    width: 32,
    height: 32,
  },
  Botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  TextoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "MontserratBold",
  },
});
