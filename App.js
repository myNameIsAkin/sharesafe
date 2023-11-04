import "react-native-gesture-handler"
import { StyleSheet} from 'react-native';
import MainPage from './screens/mainPage';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SuccessPage from "./screens/successPage";

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator   screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Home" component={MainPage} />
      <Stack.Screen name="Success" component={SuccessPage} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
