import { GraphQLClient } from 'graphql-hooks';




export const useGqlClient = () => {
  const client = new GraphQLClient({
    // url: 'https://mycollegeindia.as.r.appspot.com/graphql',
    url: 'http://localhost:4000/graphql',
  });

  return client;
};