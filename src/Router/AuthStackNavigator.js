import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
  );
};

export default AuthStack;
