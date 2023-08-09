// import { ApolloClient, InMemoryCache } from '@apollo/client';



// export const useGqlClient = () => {

//   const client = new ApolloClient({
//     uri: 'http://localhost:4000',
//     cache: new InMemoryCache(),
//   });

//   return client;
// };











import { GraphQLClient } from 'graphql-hooks';




export const useGqlClient = () => {
  const client = new GraphQLClient({
    // url: 'https://mycollegeindia.as.r.appspot.com/graphql',
    url: 'http://localhost:4000/graphql',
  });

  return client;
};