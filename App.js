import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Game from './src/assets/images/game.svg'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const Main = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>GameON</Text>
        </View>

        <View style={{display: 'flex', alignItems: 'center'}}>
          <Game
            style={{width: 250, height: 200, transform: [{rotate: '-15deg'}], opacity:0.8}}
          />
        </View>
        <View style={{display: 'flex', alignItems: 'center', marginBottom: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'skyblue',
              padding: 15,
              width: 200,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          onPress={()=>navigation.navigate('Home')}>
            <Text style={{fontWeight: 'bold', padding: 4}}>Let's BegIN</Text>
            <Icon name="chevron-right" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;
 
 