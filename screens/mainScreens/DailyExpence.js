import { View ,Text, StyleSheet } from 'react-native'
import { Colors } from '../../constants/styles';

function DailyExpence () {
    return(
        <View style={styles.container}>
            <Text style={styles.textHead}>Daily Expence List</Text>
        </View>
    )

}
export default DailyExpence;

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

