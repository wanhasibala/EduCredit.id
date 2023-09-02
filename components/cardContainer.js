import { FlatList, StyleSheet } from "react-native";
import Card from "./card";

function CardContainer({}) {
  const courseId = route.params.courseId;

  const displayedCourse = COURSE.filter((courseItem) => {
    return courseItem.categoryIds.indexOf(courseId) >= 0;
  });

  function renderCourseItem(itemData) {
    const item = itemData.item;
    const courseItemProps = {
      date: item.date,
      mitra: item.mitra,
      title: item.title,
      name: item.name,
    };
    return <Card {...courseItemProps} />;
  }
  return (
    <FlatList
      data={COURSE}
      keyExtractor={(item) => item.id}
      renderItem={renderCourseItem}
      numColumns={2}
    />
  );
}
export default CardContainer;
const styles = StyleSheet.create({});
