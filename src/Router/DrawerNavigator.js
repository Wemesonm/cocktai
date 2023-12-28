import { createDrawerNavigator } from "@react-navigation/drawer";

import Icon from "../global/styles/icons";

import CustomDrawerContent from "./CustomDrawerContent";

import Home from "../pages/Home";
import SetBeverage from "../pages/SetBeverage";
import SetDrink from "../pages/SetDrink";
import SetPumps from "../pages/SetPumps";
import Profile from "../pages/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator= (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        drawerActiveTintColor: "black",
        drawerStyle: {
          backgroundColor:
            "var(--backgroumd-light-degrade, rgba(185, 180, 199, 0.95)",
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => <Icon name="menu" size={24} color={"black"} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: () => <Icon name="user" size={24} color={"black"} />,
        }}
      />
      <Drawer.Screen
        name="SetBeverage"
        component={SetBeverage}
        options={{
          drawerIcon: () => <Icon name="bottle" size={24} color={"black"} />,
        }}
      />
      <Drawer.Screen
        name="SetDrink"
        component={SetDrink}
        options={{
          drawerIcon: () => <Icon name="drink" size={24} color={"black"} />,
        }}
      />
      <Drawer.Screen
        name="SetPumps"
        component={SetPumps}
        options={{
          drawerIcon: () => <Icon name="pump" size={24} color={"black"} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
