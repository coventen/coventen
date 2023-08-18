import { GraphQLClient } from 'graphql-request'

const endpoint = `http://localhost:4000`

export const graphQLClient = new GraphQLClient(endpoint, {
  jsonSerializer: {
    parse: JSON.parse,
    stringify: JSON.stringify,
  },
})