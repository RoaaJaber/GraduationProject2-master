import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  Switch,
  Dimensions,
  Platform,
} from "react-native";
import firebase  from '../firebase';
import 'firebase/firestore';

const db = firebase.firestore();
const store = db.collection('components').doc('state');


 function Home(props) {
  const [isDoorEnabled, setDoorEnabled] = useState(false);
  const [isLightEnabled, setLightEnabled] = useState(false);
  const [isCoolEnabled, setCoolEnabled] = useState(false);
  const [isAuto, setAuto] = useState(false);
  const [temp , setTemp] = useState(1);
  const [eggDetc,setEggDetc]= useState('');
  const [eggNotDetc,setEggNotDetc]= useState('');
  const [food,setFood]= useState('');
  db.collection("components").doc('state')
  .get()
  .then((querySnapshot) => {
    setTemp(querySnapshot.data()['temperature']);
    setEggDetc(querySnapshot.data()['TimeEggDetc'].toString());
    setEggNotDetc(querySnapshot.data()['TimeEggNotDetc'].toString());
    setFood(querySnapshot.data()['food'].toString());
 
    
    
    
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });

  

  const DoorSwitch = () => {
    setDoorEnabled((previousState) => !previousState);
    var s ;
    if(isDoorEnabled) s = "False";
    else s= "True";
    store.update({
      door: isDoorEnabled,
    })
    .then(() => {
      console.log('door state added!');
    });
  }
  
  const LightSwitch = (value) => {
    setLightEnabled(value);
    var l ,d ;
    if(isLightEnabled){l = "False"; d ="True";} 
    else{l = "True"; d ="False";}
    store.update({
      lights: isLightEnabled,
      daytime: !isLightEnabled,
    })
    .then(() => {
      console.log('lights added!');
    });}


  const CoolSwitch = () => {
 
    setCoolEnabled((previousState) => !previousState);
    var c;
    if(isCoolEnabled) c = "False";
    else c= "True";
    store.update({
      fan: isCoolEnabled,
    })
    .then(() => {
      console.log('fan added!');
    });
  }
  const AutoSwitch = () => {
    setAuto((previousState) => !previousState);
    var c;
    if (isAuto) c = false;
    else c = true;
    store
      .update({
        Auto: c,
      })
      .then(() => {
        console.log("Auto added!");
      });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}></View>
      <View style={styles.menu}>
        <View style={styles.row}>
          <View style={styles.name}>
            <Switch
              ios_backgroundColor="#3e3e3e"
              onValueChange={DoorSwitch}
              value={isDoorEnabled}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.txt}>باب المزرعة</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.name}>
            <Switch
              ios_backgroundColor="#3e3e3e"
              onValueChange={LightSwitch}
              value={isLightEnabled}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.txt}>الإضاءة</Text>
          </View>
        </View>
      </View>
      <View style={styles.rowWidget}>
        <View style={styles.weidget}>
          <Text style={styles.temp}>درجة الحرارة</Text>
          <Text style={styles.temp}>{temp}</Text>
        </View>
        <View style={styles.weidget}>
          <Text style={styles.temp}>حالة العلف</Text>
          <Text style={styles.temp}> {food }</Text>
        </View>
      </View>

    
      <View style={styles.rowWidget}>
        <View style={styles.weidget}>
          <Text style={styles.temp}>اكشاف البيضة</Text>
          <Text style={styles.temp}> {eggDetc}</Text>
        </View>
        <View style={styles.weidget}>
          <Text style={styles.temp}>عدم اكتشاف البيضة</Text>
          <Text style={styles.temp}>{eggNotDetc}</Text>
        </View>
      </View>

      <View style={styles.menu2}>
        <View style={styles.row}>
          <View style={styles.name}>
            <Switch
              ios_backgroundColor="#3e3e3e"
              onValueChange={AutoSwitch}
              value={isAuto}
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.txt}>أوتوماتيك</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#edf7f3",
  },
  top: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 10,
    backgroundColor: "#65a386",
  },
  menu: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: Dimensions.get("window").width,
    //marginTop: Dimensions.get("window").height / 8,
  },
  menu2: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: Dimensions.get("window").width,
  },
  row: {
    flexDirection: "row",

    width: Dimensions.get("window").width,
    marginTop: 20,
  },
  txt: {
    fontSize: 20,
  },
  name: {
    width: Dimensions.get("window").width / 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignContent: "flex-end",
  },
  weidget: {
    height: Dimensions.get("window").width / 3,
    width: Dimensions.get("window").width / 3,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 20,
    fontWeight: "500",
  },
  rowWidget: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width / 2,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});