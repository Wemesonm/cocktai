import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/useAuth";

import AuthStackNavigator from "./AuthStackNavigator";
import UserStackNavigator from "./UserStackNavigator";

export function Router() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
        {user ? <UserStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
