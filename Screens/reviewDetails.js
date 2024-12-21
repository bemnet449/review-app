import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { globalstyle, images } from '../style/gStyle';
import Card from '../shared/card';

export default function RDetail({ route }) {
  const { item } = route.params; // Extracting passed parameters
  const rating = item.rating; // Accessing rating directly from the item

  return (
    <View style={globalstyle.body}>
      <Card>
        <Text style={globalstyle.t}>Title: {item.title}</Text>
        <Text style={globalstyle.t}>Rating: {item.rating}</Text>
        <View style={styles.rating}>
          <Text style={globalstyle.t}>GameZone rating: </Text>
          {/* Displaying the image based on the rating from the images object */}
          <Image source={images.ratings[rating]} style={styles.ratingImage} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating:{

  }
})