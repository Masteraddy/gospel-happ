import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex justify-center items-center h-full bg-white`}>
      <Image
        source={require("../assets/logo.png")}
        style={tw`-mt-20 w-35 h-35 rounded-full`}
      />
      <Text style={tw`text-gray-800 font-bold text-xl mb-8`}>Gospel Hymn</Text>
      <TouchableOpacity
        style={tw`bg-red-600 my-5 p-8`}
        onPress={() => navigation.navigate("Yoruba")}
      >
        <Text style={tw`text-red-50 text-lg`}>Yoruba</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`bg-blue-700 p-8`}
        onPress={() => navigation.navigate("English")}
      >
        <Text style={tw`text-blue-50 text-lg`}>English</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
