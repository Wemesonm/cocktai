import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/img/cover.jpeg")}
            style={styles.img}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.textMenu}>Menu</Text>
          </TouchableOpacity>
        </View>
        <View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  imgContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    width:"100%",
    height:180,
  },
  textMenu: {
    fontSize: 24,
    fontWeight: "500",
  },
});
