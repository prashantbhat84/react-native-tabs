import React from "react";

import { View, StyleSheet, Alert, Text } from "react-native";
import { Avatar, Button, ListItem, Card } from "react-native-elements";
import { Entypo, AntDesign } from "@expo/vector-icons";

import { Audio } from "expo-av";

const id = [1, 2, 3, 4];

const screen1 = props => {
  const playaudio = async id => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require("../assets/christmas_bells (1).mp3"));
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.row1}>
        <Avatar
          rounded
          size="medium"
          source={{
            uri: "https://mumbaimirror.indiatimes.com/thumb/65825616.cms"
          }}
        />
        <Button
          icon={<Entypo name="mic" size={15} />}
          title="Record Audio"
          onPress={() => {
            Alert.alert("Info", "Audio recorded");
          }}
        />
      </View>

      <View>
        <Card>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              width: "50%",
              marginLeft: 70
            }}
            title="Play Audio"
            icon={<AntDesign name="play" size={15} />}
          />
        </Card>
      </View>
      <View>
        <Card>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              width: "50%",
              marginLeft: 70
            }}
            title="Play Audio"
            icon={<AntDesign name="play" size={15} />}
          />
        </Card>
      </View>
      <View>
        <Card>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              width: "50%",
              marginLeft: 70
            }}
            title="Play Audio"
            icon={<AntDesign name="play" size={15} />}
          />
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  row1: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginLeft: -30
  }
});

export default screen1;
