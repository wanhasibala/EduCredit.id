import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constant/color';
import Icon from 'react-native-ionicons';
import {Ionicons} from '@expo/vector-icons';

function FilterItem({ title, icons, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Ionicons name={icons} size={16} color='white' />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default FilterItem;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        marginRight: 8,
        borderRadius: 20,
        backgroundColor: Colors.primaryPressed,
      },
      button: {
        flex: 1,
      },
      buttonPressed: {
        opacity: 0.5,
      },
      innerContainer: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 5,
      },
      title: {
        fontSize: 10,
        color: 'white'
      },
})