import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {
  FIREBASE_DB,
  doc,
  updateDoc,
  deleteDoc,
} from "../../../services/firebaseConfig";

const BeverageCard = (props) => {
  const [isChecked, setIsChecked] = useState(props.isChecked);

  const updateIsChecked = async () => {
    const beverageRef = doc(FIREBASE_DB, "beverages", props.id);

    await updateDoc(beverageRef, {
      isChecked: isChecked,
    });
  };

  const deleteBeverage = async () => {
    await deleteDoc(doc(FIREBASE_DB, "beverages", props.id));
    props.getBeveragesList();
  };

  useEffect(() => {
    updateIsChecked();
  }, [isChecked]);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setIsChecked(!isChecked)}>
        {isChecked ? (
          <AntDesign name="checkcircle" size={24} color="black" />
        ) : (
          <AntDesign name="checkcircleo" size={24} color="black" />
        )}
      </Pressable>
      <Text>{props.name}</Text>
      <Pressable onPress={deleteBeverage}>
        <MaterialIcons name="delete" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default BeverageCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 10,
    width: 250,
    padding: 10,
    gap: 10,
  },
});
