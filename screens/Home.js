import {
    FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import FontSize from "../constant/fontSize";
import Colors from "../constant/color";
import Shortcut from "../components/Shortcut";
import Filter from "../components/filter";

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <HeaderTitle children={"Home"}></HeaderTitle>
        <TextInput style={styles.TextInput} placeholder="Pencarian" />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>Penggunaan</Text>
        <View style={styles.shortcutContainer}>
          <Shortcut title={"Pembuatan akun"} icons='card-outline' size={24} ></Shortcut>
          <Shortcut title={"Aktivitas & riwayat"} icons='logo-euro' size={12}></Shortcut>
          <Shortcut title={"Cicilan"}></Shortcut>
        </View>
        <View style={styles.banner}></View>
        <View style={styles.titleContainer}>
          <Text style={styles.bodyText}>Penggunaan</Text>
          <Text>Lihat semua</Text>
        </View>
        <View>
          <ScrollView horizontal={true} >
            <Filter title={"popular "}></Filter>
            <Filter title={"popular "}></Filter>
            <Filter title={"popular "}></Filter>
            <Filter title={"popular "}></Filter>
          </ScrollView>
          <FlatList >

          </FlatList>
        </View>
      </View>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  HeaderContainer: {
    flex: 1,
    marginTop: 20,
    padding: 24,
    justifyContent: "space-between",
  },
  TextInput: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
  },
  bodyContainer: {
    flex: 3,
    padding: 24,
    flexDirection: "column",
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  bodyText: {
    fontSize: FontSize.TextLarge,
    fontWeight: "500",
    marginBottom: 12,
  },
  shortcutContainer: {
    flexDirection: "row",
    direction: "ltr",
    gap: 10,
  },
  banner: {
    height: 120,
    backgroundColor: "yellow",
    alignItems: "center",
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
