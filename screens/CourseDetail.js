import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useLayoutEffect } from "react";
import { COURSES } from "../data & models/data";
import { Header } from "@react-navigation/stack";
import HeaderTitle from "../components/HeaderTitle";
import Icon from "react-native-ionicons";
import Colors from "../constant/color";
import FontSize from "../constant/fontSize";
import DetailsCourse from "../components/detailsCourse";

function CourseDetail({}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <HeaderTitle children={"Detail Course"} />
      </View>
      <ScrollView horizontal style={styles.videoContainer}>
        <View style={styles.video} />
        <View style={styles.video} />
        <View style={styles.video} />
      </ScrollView>
      <ScrollView style={styles.bodyContainer}>
        <HeaderTitle children={"UI UX Design"} style={styles.HeaderText} />
        <View style={styles.profileContainer}>
          <View style={styles.imageProfile}/>
          <Text>Name</Text>
        </View>
        <DetailsCourse />
      </ScrollView>
    </SafeAreaView>
  );
}
export default CourseDetail;
const styles = StyleSheet.create({
  container: {
    felx: 1,
    justifyContent: "center",
  },
  bodyDetailContainer: {
    height: 150,
    width: "auto",
  },
  video: {
    width: 210,
    height: 170,
    backgroundColor: Colors.primaryMain,
    borderRadius: 14,
    marginRight: 20,
  },
  videoContainer: {
    margin: 10,
    flexDirection: "row",
    gap: 20,
  },
  bodyContainer: {
    backgroundColor: "white",
    width: "auto",
    padding: 24,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  HeaderText: {
    fontSize: 12,
  },
  imageProfile:{
    borderRadius: 20,
    backgroundColor: 'grey',
    width: 20,
    height: 20,
  },
  profileContainer:{
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  }
});
