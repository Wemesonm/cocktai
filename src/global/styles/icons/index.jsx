import React from "react";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const tes = (name, size, color) => {
  switch (name) {
    case "bottle":
      return <FontAwesome5 name="wine-bottle" size={size} color={color} />;
    case "user":
      return <AntDesign name="user" size={size} color={color} />;
    case "drink":
      return <Entypo name="drink" size={size} color={color} />;
    case "pump":
      return <MaterialCommunityIcons name="pump" size={size} color={color} />;
    case "menu":
      return <AntDesign name="appstore-o" size={size} color={color} />;
    case "arrow-undo":
      return <Ionicons name="arrow-undo-outline" size={size} color={color} />;
    case "heart":
      return <Ionicons name="heart-outline" size={size} color={color} />;
    default:
      return <AntDesign name="question" size={size} color={color} />;
  }
};

const Icon = ({name, size, color}) => {
  return tes(name, size, color);
};

export default Icon;
