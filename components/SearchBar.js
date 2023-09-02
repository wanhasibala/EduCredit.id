import { TextInput, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function SearchBar() {
  return (
    <View style={styles.Container}>
      <View style={styles.fieldIcons}>
        <Ionicons name="search" size={22} />
        <TextInput placeholder="Pencarian"/>
      </View>
      <View>
        <Ionicons name="funnel-outline" size={22} style={styles.sortButton} />
      </View>
    </View>
  );
}
export default SearchBar;
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    fieldIcons :{
        flexDirection: 'row',
        backgroundColor: "white",
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        gap: 10,
        flex: 1,
    },    
    sortButton:{
        padding: 12,
        backgroundColor: 'white',
        marginLeft: 10,
        borderRadius: 10,
    }
})
