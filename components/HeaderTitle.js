import { StyleSheet,View, Text, } from "react-native";
import ProfilePicture from './ProfilePicture';
import FontSize from "../constant/fontSize";

function HeaderTitle({children}) {
    return <View style={styles.titleHeader} >
        <Text style={styles.HeaderText} >{children}</Text>
    </View>
}

export default HeaderTitle;

const styles = StyleSheet.create({
    titleHeader: {
        marginTop: 20,
    },
    HeaderText: {
        fontSize: FontSize.HeadingMedium,
        fontWeight:'bold',
    },
});