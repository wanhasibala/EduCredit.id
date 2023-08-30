import { Image, StyleSheet, Text, View } from "react-native";

function Card() {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={require("../assets/images/ilustrasi1.png")}
        style={styles.imageContainer}
      />
      <View style={styles.topDetailContainer}>
        <Text style={styles.topDetail}>1 Januari 2023</Text>
        <Text style={styles.topDetail}>MyEduSolve</Text>
      </View>
      <Text style={styles.titleCourse}>Animasi 3D with Blender</Text>
      <Text style={styles.nameCourse}>Hanansyah Abigail</Text>
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
    color: '#9e9e9e',
    fontSize: 12,
  },
  titleCourse:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  nameCourse:{
    color: '#616161'
  }
});
