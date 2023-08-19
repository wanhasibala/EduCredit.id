import { Image, StyleSheet, Text, View } from "react-native";

function ProfilePicture(){
    return (
    <View style={styles.PictureContainer} >
    </View>
    );
}

export default ProfilePicture;

const styles = StyleSheet.create({
    PictureContainer:{
        height: 48,
        width: 48,
        borderRadius: 24,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'blue',
    }
});