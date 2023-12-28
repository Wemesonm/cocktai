import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import {Title} from "./styled"

import Icon from "../../../global/styles/icons";

const Header = ({user}) => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={styles.headerDiv}>
      <StatusBar hidden="true"/>
      <View>
        {route.name === "Home" ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={35} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icon name="arrow-undo" size={35} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <Title >{route.name}</Title>
      </View>
      <View>
        <Text style={styles.userText}>{user}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerDiv: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor:
      "var(--backgroumd-light-degrade, rgba(185, 180, 199, 0.95)",
  },
  titleText: {
    fontSize: 24,
  },
});
