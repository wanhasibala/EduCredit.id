import { View,Text,StyleSheet, Image } from "react-native";
import Colors from "../constant/color";

function Shortcut(props) {
    return (
        <View style={styles.shortcutIcon}>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/icons/credit-card.png")}></Image>
            </View>
            <Text style={styles.shorcutText}>{props.title}</Text>
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