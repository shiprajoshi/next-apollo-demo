import { render, fireEvent } from '@testing-library/react';
import UsersComponent, { GET_USERS } from '../components/User';
import { MockedProvider } from '@apollo/client/testing';
import { act } from 'react-dom/test-utils';

const mocks = [
    {
        request: {
            query: GET_USERS,
            variables: {
                start: 0,
                end: 1,
            },
        },
        result: {
            data: {
                users: [
                    {
                        address:
                            '312 Bradtke Circle Apt. 259\nNew Cordie, NJ 44327',
                        email: 'Hills.Sophie@gmail.com',
                        first_name: 'Marlen',
                        id: '0',
                        phone: '437-467-9302',
                    },
                    // {
                    //     address:
                    //         '312 Bradtke Circle Apt. 259\nNew Cordie, NJ 44327',
                    //     email: 'John.Sophie@gmail.com',
                    //     first_name: 'John',
                    //     id: '1',
                    //     phone: '437-467-9302',
                    // },
                ],
            },
        },
    },
    {
        request: {
            query: GET_USERS,
            variables: {
                start: 1,
                end: 2,
            },
        },
        result: {
            data: {
                users: [
                    {
                        address:
                            '312 Bradtke Circle Apt. 259\nNew Cordie, NJ 44327',
                        email: 'John.Sophie@gmail.com',
                        first_name: 'John',
                        id: '1',
                        phone: '437-467-9302',
                    },
                ],
            },
        },
    },
];

describe('users', () => {
    it('should render users', async () => {
        const { findByText } = render(
            <MockedProvider mocks={mocks}>
                <UsersComponent initialOffset={1} />
            </MockedProvider>
        );

        const user = await findByText('Marlen');
        expect(user).toBeTruthy();
    });

    it('should render next items on clicking "load more" button', async () => {
        const { findByText, queryByText } = render(
            <MockedProvider mocks={mocks}>
                <UsersComponent initialOffset={1} />
            </MockedProvider>
        );

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0));
        });

        expect(queryByText('John')).toBe(null);

        const loadMoreButton = await findByText(/load more/i);
        await fireEvent.click(loadMoreButton);

        const userJohn = await findByText('John');
        expect(userJohn).toBeTruthy();
    });
});
