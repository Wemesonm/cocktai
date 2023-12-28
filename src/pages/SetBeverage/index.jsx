import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";

import Header from "../../components/molecules/Header";
import { TextInput } from "react-native-gesture-handler";

import BeverageCard from "../../components/molecules/BeverageCard";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import {
  FIREBASE_DB,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "../../services/firebaseConfig";

const SetBeverage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [beverageList, setBeverageList] = useState([]);

  const addBeverageItem = async () => {
    try {
      const docRef = await addDoc(collection(FIREBASE_DB, "beverages"), {
        name: name,
        isChecked: false,
      });
      // console.log("Document written with ID: ", docRef.id);
      setName("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    getBeveragesList();
  };

  const getBeveragesList = async () => {
    const querySnapshot = await getDocs(collection(FIREBASE_DB, "beverages"));

    setBeverageList(
      querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  const deleteBeverageList = async () => {
    const querySnapshot = await getDocs(collection(FIREBASE_DB, "beverages"));

    querySnapshot.docs.map((item) =>
      deleteDoc(doc(FIREBASE_DB, "beverages", item.id))
    );
    getBeveragesList();
  };

  useEffect(() => {
    getBeveragesList();
  }, []);

  return (
    <View style={{ borderWidth: 1, borderColor: "blue", flex: 1 }}>
      <Header user={"Wemeson Monteiro"} />
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter Beverage Name"
          value={name}
          onChangeText={(text) => setName(text)}
          onSubmitEditing={addBeverageItem}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Beverages </Text>
        <Text style={styles.title}>Qty: {beverageList.length}</Text>
        <Pressable onPress={deleteBeverageList}>
          <MaterialIcons name="delete" size={24} color="black" />
        </Pressable>
      </View>
      {beverageList.length > 0 ? (
        <FlatList
          style={styles.flat}
          horizontal={false}
          data={beverageList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BeverageCard
              isChecked={item.isChecked}
              id={item.id}
              name={item.name}
              getBeveragesList={getBeveragesList}
            />
          )}
        />
      ) : (
        <Text>Zerada a lista</Text>
      )}
    </View>
  );
};

export default SetBeverage;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
  input: {
    height: 45,
    width: 250,
    borderWidth: 1,
    margin: 10,
  },
  flat: {
    width: 500,
    borderWidth: 1,
    height: "100%",
    borderColor: "black",
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
