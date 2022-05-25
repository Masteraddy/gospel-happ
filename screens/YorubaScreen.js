import { View, Text, FlatList } from "react-native";
import React from "react";
import tw from "twrnc";
import ListItem from "../components/ListItem";
import data from "../data/yoruba";

const YorubaScreen = () => {
  const renderItem = ({ item }) => (
    <ListItem title={item.title} hymnno={item.number} hymn={item} />
  );
  return (
    <View style={tw`flex bg-white h-full`}>
      <Text style={tw`p-5 text-xl text-center bg-red-600 text-red-50`}>
        Yoruba Version
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.number}
      />
    </View>
  );
};

export default YorubaScreen;
