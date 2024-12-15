import React from 'react';
import { View, Text } from 'react-native';
import { globalstyle } from '../style/gStyle';
import Card from '../shared/card';

export default function RDetail({ route }) {
  const { item } = route.params; // Extracting passed parameters

  return (
    <View style={globalstyle.body}>
      <Card>
      <Text style={globalstyle.t}>Title: {item.title}</Text>
      <Text style={globalstyle.t}>Rating: {item.rating}</Text>
      <Text style={globalstyle.t}>Body: {item.body}</Text>
      </Card>
    </View>
  );
}
