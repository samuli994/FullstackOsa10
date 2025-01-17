import { gql, useQuery } from '@apollo/client';

const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

export const useMe = () => {
  const { data, loading, error } = useQuery(ME);
  return { me: data?.me, loading, error };
};
