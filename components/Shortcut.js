import { View,Text,StyleSheet, Image } from "react-native";
import Colors from "../constant/color";
import {Ionicons} from '@expo/vector-icons';

function Shortcut({icons, title, size}) {
    return (
        <View style={styles.shortcutIcon}>
            <View style={styles.imageContainer}>
                <Ionicons name={icons} size={size}/>
            </View>
            <Text style={styles.shorcutText}>{title}</Text>
        </View>
    );
}

export default Shortcut;

const styles=StyleSheet.create({
    shortcutIcon:{
        gap: 10,
        justifyContent: 'center',
        alignItems:'center'
    },
    imageContainer:{
        backgroundColor: Colors.primaryBorder,
        width:100,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    shorcutText:{
        fontSize: 12,
        opacity: 0.5,
    }
});