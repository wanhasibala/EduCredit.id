import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "./card";
import { COURSES } from "../data & models/data";

function CardContainer() {
  function renderCourseItem(itemData) {
    return (
      <Card
      imageUrl={itemData.item.imageUrl}
        title={itemData.item.title}
        date={itemData.item.date}
        name={itemData.item.name}
        mitra={itemData.item.mitra}
      />
    );
  }
  return (
      <FlatList
        data={COURSES}
        key={(item) => item.id}
        renderItem={renderCourseItem}
        numColumns={2}
      />
  );
}
export default CardContainer;
const styles = StyleSheet.create({});
