import Link from 'next/link';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import withApollo, { apolloClient } from '../lib/with-apollo';
import dynamic from 'next/dynamic';

const UsersComponent = dynamic(() => import('../components/User'), {
    loading: () => <p>Loading...</p>,
});

const User = () => (
    <ApolloProvider client={apolloClient}>
        <div>
            User Page
            <br />
            <br />
            <UsersComponent />
            <br></br>
            <Link href="/">
                <a>Go Back</a>
            </Link>
        </div>
    </ApolloProvider>
);
export default withApollo()(User);
