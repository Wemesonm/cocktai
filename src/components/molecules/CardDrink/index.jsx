import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardDrink = () => {
  return (
    <View style={styles.container}>
      <Text>Teste</Text>
    </View>
  )
}

export default CardDrink

const styles = StyleSheet.create({
    container: {
        width:180,
        height: 100,
        backgroundColor: "white",
        marginLeft:10,
      }
})