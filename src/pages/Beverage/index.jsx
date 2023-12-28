import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Beverage = ({navigation}) => {
  return (
    <View>
      <Text>Beverage</Text>
      <Button onPress={() => navigation.openDrawer()} />
    </View>
  )
}

export default Beverage

const styles = StyleSheet.create({})