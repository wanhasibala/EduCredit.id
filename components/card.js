import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Card({ title, imageUrl, date, mitra, name }) {
  return (
    <View style={styles.cardContainer}>
        <Image
          source={require("../assets/images/ilustrasi1.png")}
          style={styles.imageContainer}
        />
        <View style={styles.topDetailContainer}>
          <Text style={styles.topDetail}>{date}</Text>
          <Text style={styles.topDetail}>{mitra}</Text>
        </View>
        <Text style={styles.titleCourse}>{title}</Text>
        <Text style={styles.nameCourse}>{name}</Text>
    </View>
  );
}
export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    height: 240,
    width: 172,
    backgroundColor: "white",
    padding: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { height: 2, width: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  imageContainer: {
    height: 146,
    width: 152,
  },
  topDetailContainer: {
    flexDirection: "row",
    gap: 4,
  },
  topDetail: {
    color: "#9e9e9e",
    fontSize: 12,
  },
  titleCourse: {
    fontSize: 16,
    fontWeight: "bold",
  },
  nameCourse: {
    color: "#616161",
  },
});
