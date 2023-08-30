import { StyleSheet,View, Text, } from "react-native";
import ProfilePicture from './ProfilePicture';
import FontSize from "../constant/fontSize";

function HeaderTitle({children}) {
    return <View style={styles.titleHeader} >
        <Text style={styles.HeaderText} >{children}</Text>
        <ProfilePicture />
    </View>
}

export default HeaderTitle;

const styles = StyleSheet.create({
    titleHeader: {
        flexDirection: 'row',
        alignItems: 'top',
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    HeaderText: {
        fontSize: FontSize.HeadingMedium,
        fontWeight:'bold',
    },
});