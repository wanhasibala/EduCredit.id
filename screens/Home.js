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
import Card from "../components/card";
import CardContainer from "../components/cardContainer";

function Home() {
  // function renderCardItem() {
  //   return <Card />;
  // }
  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <HeaderTitle children={"Home"}></HeaderTitle>
        <TextInput style={styles.TextInput} placeholder="Pencarian" />
      </View>
      <ScrollView style={styles.bodyContainer}>
        <Text style={styles.bodyText}>Penggunaan</Text>
        <View style={styles.shortcutContainer}>
          <Shortcut
            title={"Pembuatan akun"}
            icons="card-outline"
            size={24}
          ></Shortcut>
          <Shortcut
            title={"Aktivitas & riwayat"}
            icons="logo-euro"
            size={20}
          ></Shortcut>
          <Shortcut
            title={"Cicilan"}
            icons="clipboard-outline"
            size={24}
          ></Shortcut>
        </View>

        {/* BANNER */}

        <Image
          source={require("../assets/images/banner1.png")}
          style={styles.banner}
        />

        {/* main content */}

        <View style={styles.titleContainer}>
          <Text style={styles.bodyText}>Popular</Text>
          <Text>Lihat semua</Text>
        </View>
        <View>
          <Filter />
        </View>
        <View>
          <CardContainer />
        </View>
      </ScrollView>
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
    // flex: 1,
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
    padding: 24,
    flexDirection: "column",
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden'
  },
  bodyText: {
    fontSize: FontSize.TextLarge,
    fontWeight: "500",
    marginBottom: 12,
  },
  shortcutContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
    justifyContent: "center",
  },
  banner: {
    width: "100%",
    height: 140,
    alignItems: "center",
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
