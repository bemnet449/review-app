import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { globalstyle } from '../style/gStyle';
import Card from '../shared/card';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "A", rating: "5", body: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", key: '1' },
    { title: "B", rating: "4", body: "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", key: '2' },
    { title: "C", rating: "3", body: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC", key: '3' },
  ]);

  return (
    <View style={globalstyle.body}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewD', { item })}>
  <Card>
    <Text style={globalstyle.t}>{item.title}</Text>
  </Card>
</TouchableOpacity>

        )}
      />
    </View>
  );
}
