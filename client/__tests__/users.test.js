import { render } from '@testing-library/react';
import Users from '../pages/users';

describe('Landing page', () => {
    it('should render', () => {
        const container = render(<Users />);
        expect(container).toMatchSnapshot();
    });
});
