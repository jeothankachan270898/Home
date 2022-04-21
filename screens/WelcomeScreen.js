import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import {useState ,useEffect ,useContext} from 'react';
import { AuthContext } from '../store/auth-context';

import { NavigationContainer } from '@react-navigation/native';
import Button from '../components/ui/Button';

function WelcomeScreen({navigation}) {

  const [fetchedMessage, setFetchedMesssage] = useState('');
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios
      .get(
        'https://home-8b679-default-rtdb.firebaseio.com//message.json?auth=' +
          token
      )
      .then((response) => {
        setFetchedMesssage(response.data);
      });
  }, [token]);

  function pressHandler () {
    navigation.navigate('AboutUs')
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
   
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
