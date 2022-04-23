import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const Component = () => {
    const { data, loading } = useQuery(GET_NAME);

    return <span>{loading ? '..' : data?.name}</span>;
};

export const GET_NAME = gql`
    query name {
        name
    }
`;

export default Component;
