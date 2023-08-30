import { Image, View, Text,StyleSheet } from "react-native";
import Colors from "../constant/color";
import {Ionicons} from '@expo/vector-icons';

function Filter({title, icons}){
    return(
        <View style={styles.button}>
            <Ionicons name={icons} color='white'/>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default Filter;

const styles = StyleSheet.create({
    title:{
        fontSize: 12,
        opacity:0.75,
        color:'white'
    },
    button:{
        flexDirection:'row',
        backgroundColor: Colors.primaryPressed,
        justifyContent: 'center',
        paddingHorizontal:10,
        paddingVertical:12,
        borderRadius: 20,
        gap: 5,
        alignItems: 'flex-start',
        marginRight: 5,
    }
});