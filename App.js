import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Weather from "./weather";

export default class App extends Component {
  state = {
    isLoaded: false,
    lat: null,
    long: null
  };

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          isLoaded: true
        });
      },
      error => {
        console.log(error);
      }
    );
  };
  render() {
    const { isLoaded } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather..</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loading: {
    flex: 1,
    backgroundColor: "#C1DC89",
    justifyContent: "flex-end",
    paddingLeft: 20
  },
  loadingText: {
    marginBottom: 100,
    fontSize: 40
  }
});
