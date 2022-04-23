import Link from 'next/link';
import WithApollo, { apolloClient } from '../lib/with-apollo';
import Name from '../components/Name';
import { ApolloProvider } from 'react-apollo';

const Page = () => (
	<ApolloProvider client={apolloClient}>
		<div>
			Welcome, <Name />
			<br />
			<br />
			<Link href="/about">
				<a>About</a>
			</Link>
			<br></br>
			<Link href="/users">
				<a>Users</a>
			</Link>
		</div>
	</ApolloProvider>
);

export default WithApollo()(Page);
