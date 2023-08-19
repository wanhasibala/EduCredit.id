import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import FontSize from "../constant/fontSize";
import Colors from "../constant/color";
import Shortcut from "../components/Shortcut";
import Filter from "../components/filter";

function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.HeaderContainer} >
                <HeaderTitle children={'Home'}></ HeaderTitle>
                <TextInput style={styles.TextInput} placeholder="Pencarian" />
            </View>
            <View style={styles.bodyContainer} >
                <Text style={styles.bodyText} >Penggunaan</Text>
                <View style={styles.shortcutContainer}>
                    <Shortcut title={'Pembuatan akun'}></Shortcut>
                    <Shortcut title={'Aktivitas & riwayat'}></Shortcut>
                    <Shortcut title={'Cicilan'}></Shortcut>
                </View>
                <View style={styles.banner}></View>
                <View style={styles.titleContainer}>
                    <Text style={styles.bodyText} >Penggunaan</Text>
                    <Text>Lihat semua</Text>
                </View>
                <View style={styles.shortcutContainer}>
                <Filter title={'popular '}></Filter>
                <Filter title={'popular '}></Filter>
                <Filter title={'popular '}></Filter>
                <Filter title={'popular '}></Filter>
                </View>
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
    HeaderContainer: {
        flex: 1,
        marginTop: 20,
        padding: 24,
        justifyContent: 'space-between'
    },
    TextInput: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
    },
    bodyContainer: {
        flex: 3,
        padding: 24,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    bodyText: {
        fontSize: FontSize.TextLarge,
        fontWeight: '500',
        marginBottom: 12,
    },
    shortcutContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center'
    },
    banner: {
        height: 120,
        backgroundColor: 'yellow',
        alignItems: 'center',
        marginBottom: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});