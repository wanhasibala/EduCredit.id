import { StyleSheet, Text, TextInput, View } from "react-native";
import ProfilePicture from "../components/ProfilePicture";

function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.HeaderContainer} >
                <View style={styles.titleHeader} >
                    <Text style={styles.HeaderText} >Home</Text>
                    <ProfilePicture />
                </View>
                <TextInput style={styles.TextInput} />
            </View>
            <View style={styles.bodyContainer} >
                <Text>Home</Text>
                <ProfilePicture />
            </View>
        </View>
    );
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    titleHeader:{
        flexDirection: 'row',
        alignItems: 'top',
        justifyContent: 'space-between',
    },
    HeaderText: {
        fontSize: 24,
    },
    HeaderContainer: {
        flex: 1,
        marginTop: 20,
        padding: 24,
        // backgroundColor: 'blue',
        justifyContent:'space-between'
    },
    TextInput:{
        backgroundColor:'white',
        padding: 10,
        borderRadius: 8,
    },
    bodyContainer: {
        flex: 3,
        backgroundColor: 'green',
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'yellow',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
});