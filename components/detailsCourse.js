import { StyleSheet, Text, View } from "react-native";
import HeaderTitle from "./HeaderTitle";
import FontSize from "../constant/fontSize";

function DetailsCourse() {
  return (
    <View>
      <HeaderTitle children={'UI UX Course'} style={styles.Head}/>
      <Text>Details about the course</Text>
    </View>
  );
}
export default DetailsCourse;
const styles=StyleSheet.create({
    Head:{
        fontSize: 12,
    }
})
