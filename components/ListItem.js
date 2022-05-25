import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const ListItem = ({ title, hymnno, hymn }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Hymn", { hymn, sound: hymn.tone })}
    >
      <View style={tw`p-4 border-b border-gray-200`}>
        <Text>Hymn {hymnno}:</Text>
        <Text style={tw`font-semibold text-base pt-1`}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
