import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawerNavigator from "./DrawerNavigator";
import Home from "../pages/Home";
import Production from "../pages/Production";

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Production" component={Production} />
    </Stack.Navigator>
  );
};

export default UserStack;
