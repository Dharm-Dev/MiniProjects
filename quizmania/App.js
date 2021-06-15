import React from 'react';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import Title from './components/title';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,Button,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
function App(){
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} 
      
      options={{
        
        headerTitle:'QuizMania', 
        
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#f4e"
            
          />
        ),
      }}

      />
      <Stack.Screen 
      component={Quiz}
      name='Quiz'
      />
      <Stack.Screen 
      component={Result}
      name='Result'
      />
      
    </Stack.Navigator>
  </NavigationContainer>

  
  // <View>
  //   {/* <Title /> */}
  //   <Home />
  //   {/* <Quiz /> */}
  //   {/* <Result /> */}
  // </View>
  );
}
export default App;
