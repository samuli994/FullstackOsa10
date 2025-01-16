import React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useSignIn from '../hooks/useSignIn';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { authenticate } = await signIn({ username, password });
      console.log('Access Token:', authenticate.accessToken);
    } catch (e) {
      console.error('Error:', e);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <View>
            <TextInput
              style={[
                styles.input,
                touched.username && errors.username && styles.errorInput,
              ]}
              placeholder="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {touched.username && errors.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}

            <TextInput
              style={[
                styles.input,
                touched.password && errors.password && styles.errorInput,
              ]}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <Button onPress={handleSubmit} title="Sign In" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  errorInput: {
    borderColor: '#d73a4a',
  },
  errorText: {
    color: '#d73a4a',
    marginBottom: 10,
  },
});

export default SignIn;
