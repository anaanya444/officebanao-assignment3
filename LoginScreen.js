import React from "react"
import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native"

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Email field */}
        <TextInput
          style={styles.input}
          placeholder="Enter email address                "
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {/* Password field */}
        <TextInput
          style={styles.input}
          placeholder="Enter the Password"
          secureTextEntry
        />
        {/* Login button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flex: 0.01,
    backgroundColor: "#8A2BE2",
    paddingTop: 40,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "#FFFFFF",
    borderColor: "#8A2BE2",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    width: "80%",
    height: 40,
    backgroundColor: "#8A2BE2",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
})

export default LoginScreen
