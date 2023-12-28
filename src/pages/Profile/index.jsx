import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Header from '../../components/molecules/Header'

const Profile = () => {
  return (
    <View>
      <Header user={"Wemeson Monteiro"} />
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})