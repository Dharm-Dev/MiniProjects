import React,{useState} from 'react';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import Title from './components/title';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,Button,Alert,
  useColorScheme,
  View,
  BackHandler,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const showConfirmDialog = () => {
  return Alert.alert(
    "Are your sure?",
    "Are you sure you want to remove this beautiful box?",
    [
      // The "Yes" button
      {
        text: "Yes",
        onPress: () => {
          BackHandler.exitApp();
          
        },
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: "No",
      },
    ]
  );
};

function App(){
  const [showBox,setShowBox] = useState(true);

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} 
      
      options={{

        headerTitle:'QuizMania', 
        headerTransparent: false,
        headerTitleStyle: {
          color: '#ff0',
        },
        headerStyle: {
          backgroundColor: '#804790',
        },headerTitleStyle: {
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#833471',
        },   
        headerRight: () => (
          <Button
            onPress={showConfirmDialog}
            title="Exit"
            color="#f34"
          />
        ),
      }}

      />
      <Stack.Screen 
      
      component={Quiz}
      name='Quiz'
      options={{ 
        headerTransparent: false,
        headerTitleStyle: {
          color: '#ff0',
        },
        headerStyle: {
          backgroundColor: '#833471',
        },headerTitleStyle: {
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#833471',
        },   
        headerRight: () => (
          <Button
            onPress={showConfirmDialog}
            title="Exit"
            color="#f40"
          />
        ),
      }}
      />
      <Stack.Screen 
      
      component={Result}
      name='Result'
      options={{ 
        headerTransparent: false,
        headerTitleStyle: {
          color: '#ff0',
        },
        headerStyle: {
          backgroundColor: '#833471',
        },headerTitleStyle: {
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#833471',
        },   
        headerRight: () => (
          <Button
            onPress={showConfirmDialog}
            title="Exit"
            color="#f40"
          />
        ),
      }}
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
