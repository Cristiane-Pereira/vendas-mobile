// import { StatusBar } from "expo-status-bar";
import { StatusBar, ScrollView } from "react-native";
import { Cesta } from "./src/views/Cesta";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import Itens from "./src/components/Itens";

export default function App() {
  const [fonts] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fonts) {
    return <AppLoading />;
  }

  return (
    <ScrollView>
      <StatusBar />
      <Cesta />
      <Itens />
    </ScrollView>
  );
}
