import { View, Text, StyleSheet } from "react-native";

export  const globalstyle=StyleSheet.create({
    body: {
        padding: 24,
      },
      t:{
        fontFamily:"nunito-bold",
        fontSize:20
      }
});


export const images = {
  ratings:{
    '1':require('../assets/rating-1.png'),
    '2':require('../assets/rating-2.png'),
    '3':require('../assets/rating-3.png'),
    '4':require('../assets/rating-4.png'),
    '5':require('../assets/rating-5.png'),
  }
}