import { View ,Text, StyleSheet } from 'react-native'
import { Colors } from '../../constants/styles';

function Profile () {
    return(
        <View style={styles.container}>
            <Text style={styles.textHead}>My Profile</Text>
        </View>
    )

}
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHead: {
        fontWeight: 'bold',
        color: Colors.primary500,
        fontSize: 15
    }
})

