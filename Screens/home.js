import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalstyle } from '../style/gStyle';
import Card from '../shared/card';
import Form from './form';

export default function Home({ navigation }) {
  const [modalopen, setModalopen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'A', rating: '5', body: 'Sample review A', key: '1' },
    { title: 'B', rating: '4', body: 'Sample review B', key: '2' },
    { title: 'C', rating: '3', body: 'Sample review C', key: '3' },
  ]);

  return (
    <View style={globalstyle.body}>
      <Modal visible={modalopen} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <MaterialIcons
                name="close"
                size={30}
                color="black"
                onPress={() => setModalopen(false)}
                style={styles.icon}
              />
            </View>
            <Form />
          </View>
        </View>
      </Modal>
      <View style={styles.iconContainer}>
        <MaterialIcons
          name="add"
          size={30}
          color="black"
          onPress={() => setModalopen(true)}
          style={styles.icon}
        />
      </View>
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

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    padding: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
});
