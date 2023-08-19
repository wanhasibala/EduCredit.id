import { Image, View, Text,StyleSheet } from "react-native";
import Colors from "../constant/color";

function Filter(props){
    return(
        <View style={styles.button}>
            <Image source={require('../assets/icons/book-open.png')}/>
            <Text style={styles.title}>{props.title}</Text>
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
        gap: 12,
        alignItems: 'center',
        justifyContent:'center'
    }
});