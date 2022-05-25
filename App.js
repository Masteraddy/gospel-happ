import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import OtherScreen from "./screens/OtherScreen";
import EnglishScreen from "./screens/EnglishScreen";
import YorubaScreen from "./screens/YorubaScreen";
import HymnScreen from "./screens/HymnScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Yoruba"
          component={YorubaScreen}
          options={{ title: "Hymn List" }}
        />
        <Stack.Screen
          name="English"
          component={EnglishScreen}
          options={{ title: "Hymn List" }}
        />
        <Stack.Screen name="Hymn" component={HymnScreen} />
        <Stack.Screen name="Other" component={OtherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
