// import { ApolloClient, InMemoryCache } from '@apollo/client';



// export const useGqlClient = () => {

//   const client = new ApolloClient({
//     uri: 'http://localhost:4000',
//     cache: new InMemoryCache(),
//   });

//   return client;
// };











import { GraphQLClient } from 'graphql-hooks';
// import memCache from 'graphql-hooks-memcache'




export const useGqlClient = () => {
  const client = new GraphQLClient({
    url: 'http://localhost:4000/graphql',
  });

  client.setHeader('authorization', `Bearer ${'hello'}`)

  return client;
};