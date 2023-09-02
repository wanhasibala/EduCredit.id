import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Card({ title, imageUrl, date, mitra, name, id }) {
  const navigation = useNavigation();

  function selectedCourseItemHandler() {
    navigation.navigate("CourseDetail", { courseId: id});
  }
  return (
    <View style={styles.cardContainer}>
      <Pressable onPress={selectedCourseItemHandler}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.topDetailContainer}>
          <Text style={styles.topDetail}>{date}</Text>
          <Text style={styles.topDetail}>{mitra}</Text>
        </View>
        <Text style={styles.titleCourse}>{title}</Text>
        <Text style={styles.nameCourse}>{name}</Text>
      </Pressable>
    </View>
  );
}
export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    height: "auto",
    width: 160,
    backgroundColor: "white",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { height: 2, width: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    margin: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    height: 150,
    width: "auto",
  },
  topDetailContainer: {
    flexDirection: "row",
    gap: 4,
    padding: 5,
  },
  topDetail: {
    color: "#9e9e9e",
    fontSize: 12,
  },
  titleCourse: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
  },
  nameCourse: {
    color: "#616161",
    padding: 5,
  },
});
