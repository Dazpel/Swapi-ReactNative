import React from "react";
import { StyleSheet, Text, View, ViewComponent } from "react-native";
import { Button } from "react-native-elements";


export default class Home extends React.Component {
  consoleMessage = () => {
    console.log("button clicked --- start");
    console.log("console message button clicked");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tittle}>Welcome to the StarsWars API Project</Text>

        <View style={styles.btn}>
          <Button
      style={styles.btn_e}
            title="Search People"
            onPress={() => this.props.navigation.navigate("Character")}
          />
          <Button
            style={styles.btn_e}
            title="Search Planets"
            onPress={() => this.props.navigation.navigate("Planets")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    flexDirection: "column"
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    
  },

  btn_e: {
    padding:10,
  },

  title: {
    marginBottom: 50,
  }
});
