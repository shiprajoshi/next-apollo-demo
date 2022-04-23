import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Name, { GET_NAME } from '../components/Name';

const mocks = [
    {
        request: {
            query: GET_NAME,
        },
        result: {
            data: {
                name: 'Adam Kling',
            },
        },
    },
];

describe('Name', () => {
    it('should render name', async () => {
        const { findByText } = render(
            <MockedProvider mocks={mocks}>
                <Name />
            </MockedProvider>
        );
        const name = await findByText('Adam Kling');
        await expect(name).toBeTruthy();
    });
});
