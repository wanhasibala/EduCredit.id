import {
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import Colors from "../constant/color";
import FilterItem from "./filterItem";
import { CATEGORIES } from "../data & models/data";

function renderCategoryItem(itemData) {
  return <FilterItem title={itemData.item.title} icons={itemData.item.icon} />;
}

function Filter() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      horizontal={true}
    />
  );
}

export default Filter;

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    opacity: 0.75,
    color: "white",
  },
  button: {
    flexDirection: "row",
    backgroundColor: Colors.primaryPressed,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 20,
    gap: 5,
    alignItems: "flex-start",
    marginRight: 5,
    marginBottom: 10,
  },
});
