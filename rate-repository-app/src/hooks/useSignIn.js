import { useMutation, useApolloClient } from '@apollo/client';
import { gql } from '@apollo/client';
import { useContext } from 'react';
import { useNavigate } from 'react-router-native';

import AuthStorageContext from '../contexts/AuthStorageContext';

const AUTHENTICATE = gql`
  mutation Authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: { credentials: { username, password } },
      });

      if (data?.authenticate?.accessToken) {
        // Tallennetaan access token
        await authStorage.setAccessToken(data.authenticate.accessToken);

        // Tyhjennetään Apollo Clientin välimuisti
        await apolloClient.resetStore();

        // Ohjataan käyttäjä RepositoryList-näkymään
        navigate('/');
      }

      return data;
    } catch (e) {
      console.error('Error during sign in:', e);
      throw new Error(e);
    }
  };

  return [signIn, result];
};

export default useSignIn;
