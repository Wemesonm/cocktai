import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

import CardDrink from "../../molecules/CardDrink";

import {Container} from "./styles"

const CardList = ({listName}) => {
  return (
    <Container>
      <Text style={styles.title}>{listName}</Text>
      <ScrollView horizontal={true} style={styles.containerCard}>
        <CardDrink />
        <CardDrink />
        <CardDrink />
        <CardDrink />
        <CardDrink />
        <CardDrink />
        <CardDrink />
        <CardDrink />
        <CardDrink />
      </ScrollView>
    </Container>
  );
};

export default CardList;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 24,
  },
  containerCard: {
    width: "100%",
    flexDirection: "row",
  },
});
