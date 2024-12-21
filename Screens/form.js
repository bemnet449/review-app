import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import { globalstyle } from '../style/gStyle';

export default function Form() {
  return (
    <View style={globalstyle.container}>
      <Formik
        initialValues={{ title: '', rating: '', body: '' }}
        onSubmit={(values) => {
          console.log(values); // Replace with actual submit logic
        }}
      >
        {(props) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <TextInput
              style={styles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <TextInput
              multiline
              style={[styles.input, styles.multiline]}
              placeholder="Body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={props.handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 8,
    borderRadius: 6,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  multiline: {
    minHeight: 60,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 10,
    width: '70%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
