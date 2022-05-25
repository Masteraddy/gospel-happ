import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { Audio } from "expo-av";

const HymnScreen = ({ route }) => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const { hymn } = route.params;

  const playSound = async () => {
    if (!isPlaying) {
      let res = await sound.playAsync();
      setIsPlaying(res.shouldPlay);
    } else {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (hymn.tone) {
          const { sound } = await Audio.Sound.createAsync(hymn.tone);
          setSound(sound);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // return () => {
    //   if (sound) {
    //     // sound.unloadAsync();
    //     sound.stopAsync();
    //   }
    // };
  }, [sound]);

  return (
    <ScrollView style={tw`bg-white`}>
      <View style={tw`h-full pb-5`}>
        {sound && sound?._loaded ? (
          <View style={tw`flex justify-center items-center pt-3`}>
            <TouchableOpacity
              style={tw`p-3 text-center bg-blue-600 w-25 justify-center items-center`}
              onPress={() => playSound()}
            >
              <Text style={tw`text-blue-50`}>
                {isPlaying ? "Stop" : "Play"} Tone
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
        <Text style={tw`text-xl font-bold p-5`}>
          Hymn {hymn.number}: {hymn.title}
        </Text>
        <Text style={tw`text-lg px-5`}>{hymn.lyrics}</Text>
      </View>
    </ScrollView>
  );
};

export default HymnScreen;
