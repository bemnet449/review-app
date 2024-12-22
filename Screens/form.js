import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import { globalstyle } from '../style/gStyle';
import * as yup from 'yup';

const ReviewSchema = yup.object({
  title: yup.string()
    .required('Title is required')
    .min(4, 'Title must be at least 4 characters'),
  body: yup.string()
    .required('Body is required')
    .min(8, 'Body must be at least 8 characters'),
  rating: yup.string()
    .required('Rating is required')
    .test('is-num-1-5', 'Rating must be between 1 and 5', (val) => {
      return parseInt(val) > 0 && parseInt(val) < 6;
    }),
});

export default function Form({ addReview }) {
  return (
    <View style={globalstyle.container}>
      <Formik
        initialValues={{ title: '', rating: '', body: '' }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              onChangeText={props.handleChange('title')}
              onBlur={props.handleBlur('title')}
              value={props.values.title}
            />
            {props.touched.title && props.errors.title && (
              <Text style={styles.errorText}>{props.errors.title}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              onBlur={props.handleBlur('rating')}
              value={props.values.rating}
              keyboardType="numeric"
            />
            {props.touched.rating && props.errors.rating && (
              <Text style={styles.errorText}>{props.errors.rating}</Text>
            )}

            <TextInput
              multiline
              style={[styles.input, styles.multiline]}
              placeholder="Body"
              onChangeText={props.handleChange('body')}
              onBlur={props.handleBlur('body')}
              value={props.values.body}
            />
            {props.touched.body && props.errors.body && (
              <Text style={styles.errorText}>{props.errors.body}</Text>
            )}

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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
});
