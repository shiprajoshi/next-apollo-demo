import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	gap: 15px;
`;

const ListItems = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	padding: 10px;
	background: ${({ color }) => color};
`;

const Button = styled.button`
	margin-top: 20px;
	padding: 10px;
`;

const UsersComponent = ({ initialOffset = 20 }) => {
	const { loading, data } = useQuery(query);

	const [listItems, setListItems] = useState([]);
	const [currentOffset, setCurrentOffset] = useState(0);

	useEffect(() => {
		setListItems((prev) => {
			const newState = [];
			const newItems =
				data?.users?.slice(currentOffset, currentOffset + initialOffset) || [];
			newState.push(
				...prev,
				...newItems.map((i) => ({
					...i,
					color: `rgb(${getRandom()}, ${getRandom()}, ${getRandom()}, 0.2)`,
				}))
			);
			return newState;
		});
	}, [currentOffset, data]);

	const handleClick = () => {
		setCurrentOffset((prev) => prev + initialOffset);
	};

	return (
		<div>
			<Container>
				{loading
					? '..'
					: listItems?.map((user) => (
							<ListItems key={user.id} color={user.color}>
								<h3>{user.first_name}</h3>
								<div>{user.address}</div>
								<div>{user.email}</div>
								<div>{user.phone}</div>
							</ListItems>
					  ))}
			</Container>
			<Button onClick={handleClick}>Load more!!</Button>
		</div>
	);
};

export const query = gql`
	query {
		users {
			id
			first_name
			address
			email
			phone
		}
	}
`;

function getRandom(min = 0, max = 255) {
	return Math.random() * (max - min) + min;
}

export default UsersComponent;
