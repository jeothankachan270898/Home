import { View ,Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';

function About () {
    return(
        <View style={styles.container}>
            <Text style={styles.textHead}>About Us</Text>
        </View>
    )

}
export default About;

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