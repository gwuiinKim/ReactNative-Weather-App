import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient colors={["#8AC6FD", "#0418C9"]} style={styles.container}>
        <View style={styles.upper}>
          <Text style={styles.icon} />
          <Text style={styles.temp}>35°</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>Raining</Text>
          <Text style={styles.subtitle}>Look outside</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 100,
    alignItems: "center"
  },
  temp: {
    fontSize: 38,
    color: "white",
    fontWeight: "300"
  },
  title: {
    fontSize: 38,
    color: "white",
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    color: "white",
    fontWeight: "200"
  }
});
