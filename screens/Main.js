import React ,{useState} from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";



function Main ({navigation}) {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.txt}>أنظمة المزرعة</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Main;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#edf7f3",
    alignContent: "center",
    alignItems: "center",
    paddingTop: Dimensions.get("window").height / 4,
  },
  btn: {
    height: Dimensions.get("window").height / 7,
    width: Dimensions.get("window").width / 2,
    backgroundColor: "#65a386",
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
  },
});
