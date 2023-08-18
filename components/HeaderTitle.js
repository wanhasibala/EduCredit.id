import { StyleSheet,View, Text, } from "react-native";
import ProfilePicture from './ProfilePicture';

function HeaderTitle(props) {
    return <View style={styles.titleHeader} >
        <Text style={styles.HeaderText} >{props.title}</Text>
        <ProfilePicture />
    </View>
}

export default HeaderTitle;

const styles = StyleSheet.create({
    titleHeader: {
        flexDirection: 'row',
        alignItems: 'top',
        justifyContent: 'space-between',
    },
    HeaderText: {
        fontSize: 24,
        fontWeight:'bold',
    },
});