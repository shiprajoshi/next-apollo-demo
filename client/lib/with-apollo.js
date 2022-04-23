import { withApollo } from 'next-apollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';
import fetch from 'cross-fetch';

export const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: process.env.API || 'http://localhost:5001/graphql',
        fetch,
    }),
    cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
