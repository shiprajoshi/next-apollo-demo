import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { useCallback, useEffect, useState } from 'react';
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
    const [listItems, setListItems] = useState([]);
    const { fetchMore } = useQuery(GET_USERS, {
        variables: {
            start: 0,
            end: 0,
        },
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        handleClick();
    }, []);

    function updateList(data) {
        setListItems((prev) => {
            const newState = [];
            const newItems = data?.users || [];
            newState.push(
                ...prev,
                ...newItems.map((i) => ({
                    ...i,
                    color: `rgb(${getRandom()}, ${getRandom()}, ${getRandom()}, 0.2)`,
                }))
            );

            console.log(newState);
            return newState;
        });
    }

    const handleClick = async () => {
        try {
            setLoading(true);
            const res = await fetchMore({
                variables: {
                    start: listItems.length,
                    end: listItems.length + initialOffset,
                },
            });
            setError(null);
            setLoading(false);
            updateList(res.data);
        } catch (e) {
            setError(e);
        }
    };

    return (
        <div>
            <Container>
                {listItems?.map((user) => (
                    <ListItems key={user.id} color={user.color}>
                        <h3>{user.id}</h3>
                        <h3>{user.first_name}</h3>
                        <div>{user.address}</div>
                        <div>{user.email}</div>
                        <div>{user.phone}</div>
                    </ListItems>
                ))}
            </Container>
            {loading ? <div>loading...</div> : null}
            {error ? <div>{error.message}</div> : null}
            <Button onClick={handleClick}>Load more!!</Button>
        </div>
    );
};

export const GET_USERS = gql`
    query ($start: Int, $end: Int) {
        users(start: $start, end: $end) {
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
