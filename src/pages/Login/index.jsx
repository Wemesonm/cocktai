import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

import { FIREBASE_AUTH } from "../../services/firebaseConfig";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      alert("Check your Emails!");
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      alert("Check your Emails!");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            placeholder="Login"
            placeholderTextColor="black"
            value={email}
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="black"
            value={password}
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <>
          <Button title="Login" onPress={signIn} />
          <Button title="Create account" onPress={signUp} />
        </>

    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerInput: {
    borderWidth: 1,
    borderColor: "black",
    width: 220,
    height: 35,
  },
  button: {
    borderWidth: 1,
    borderColor: "black",
    marginTop: 10,
    padding: 5,
  },
});
